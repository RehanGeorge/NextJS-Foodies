export default function MealDetailsPage({ params }) {
  return (
    <div>
      <h1>This is the meal page for {params.mealSlug}</h1>
    </div>
  );
}