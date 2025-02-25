import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";
const requestConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:5014/api/Meal", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
