export default function TeacherCard({ teacher }) {
  const { name, surname, languages, lesson_info, conditions } = teacher;

  return (
    <li>
      <h2>{name + ' ' + surname}</h2>
      <p>
        <span>Speaks: </span>
        {languages.join(', ')}
      </p>
      <p>
        <span>Lesson info: </span>
        {lesson_info}
      </p>
      <p>
        <span>Conditions: </span>
        {conditions.join(' ')}
      </p>
    </li>
  );
}
