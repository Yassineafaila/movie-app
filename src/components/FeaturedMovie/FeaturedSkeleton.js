import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function FeaturedSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="cast-skeleton d-flex align-items-center  flex-column">
        <div>
          <Skeleton count={5}></Skeleton>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default FeaturedSkeleton;
