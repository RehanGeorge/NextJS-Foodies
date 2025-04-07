export default function MealPage({ params }) {
  return (
    <div>
      <h1>This is the meal page for {params.slug}</h1>
    </div>
  );
}