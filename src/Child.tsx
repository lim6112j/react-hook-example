import { memo } from 'react';
import _ from 'lodash';
function Child(props: any) {
  const { count, updateCounter } = props;
  console.log("child called")
  return (
    <div>
      <p> child  -  {count}</p>
      <button onClick={updateCounter}>click in child </button>
    </div>
  );
}
export default memo(Child, _.isEqual);
