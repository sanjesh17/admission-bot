
// We import the data from the file you created
import { PLACEMENT_DATA } from "@/app/research/data";
import { notFound } from "next/navigation";

// --- NEW FUNCTION TO FIX THE ERROR ---
// This tells Next.js which pages to pre-build at build time.
export async function generateStaticParams() {
  const courseNames = Object.keys(PLACEMENT_DATA);

  // We need to return an array of objects, where each object has a 'slug' property
  return courseNames.map((name) => ({
    slug: encodeURIComponent(name),
  }));
}

// --- YOUR PAGE COMPONENT (UNCHANGED) ---
export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // The 'slug' comes from the URL, e.g., "School%20of%20Law"
  // We decode it to get the original course name, e.g., "School of Law"
  const courseName = decodeURIComponent(params.slug);

  // Find the data for this specific course from our main data object
  const courseData = PLACEMENT_DATA[courseName as keyof typeof PLACEMENT_DATA];

  // If someone tries a URL for a course that doesn't exist, show a "Not Found" page.
  if (!courseData) {
    return notFound();
  }

  // This is the new blank page.
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {courseName}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {courseData.description}
        </p>

        <div className="text-center p-6 border-2 border-dashed border-red-300 bg-red-50 rounded-lg">
          <p className="font-semibold text-red-700">
            This is a new page. You can now build out the full details for this
            course here!
          </p>
        </div>
      </div>
    </div>
  );
}
