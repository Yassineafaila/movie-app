import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function ItemSkeleton({ cards }) {
  return Array(cards).fill(0).map((item,index) => {
    return (
        <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
          <div className="">
            <Skeleton width={220} height={350} />
            <Skeleton count={1} />
          </div>
        </SkeletonTheme>
    );
  });
}

export default ItemSkeleton;
