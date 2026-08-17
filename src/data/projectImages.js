// Local image overrides, keyed by Firestore document id.
//
// Project text still comes from the Firestore `projects` collection, but the
// images no longer do: Cloud Storage for Firebase now requires the paid Blaze
// plan, so the old `photoUrl` links (firebasestorage.googleapis.com) return
// HTTP 402. The images now live in public/images/ and are matched to each
// project by its (stable) document id below.
//
// To change a project's image: drop the file in public/images/ and update the
// path here. Adding a brand-new project still works through Firestore; just add
// its id + image here too.

const projectImages = {
  D9xrwLWMhxh941Q40kiA: "/images/url-shortener.jpg", // Url shortener
  aGyItMhkXOTMxyGjvnEt: "/images/learning-management-system.png", // Learning management system
  cLezZ0rvTHfh9iwS1aQD: "/images/chat-cord.png", // Chat-Cord
  mKzY8Z0t94RQ3zIyzpK0: "/images/ip-info.png", // IP Info
};

// Resolve a project's image: prefer the local override, fall back to whatever
// the Firestore doc stored (so a newly-added project isn't blank if its id
// isn't mapped yet).
export function resolveProjectImage(project) {
  return projectImages[project.id] || project.photoUrl;
}

export default projectImages;
