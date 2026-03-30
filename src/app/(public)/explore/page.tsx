import { Suspense } from 'react';
import Explore from './Explore';

const ExplorePage = () => {
  return (
    <Suspense fallback>
      <Explore />
    </Suspense>
  )
};

export default ExplorePage;
