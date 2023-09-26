import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'

function CastSkeleton({cards}) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
        <div className="cast-skeleton d-flex align-items-center  flex-column">
          <div className="image">
            <Skeleton width={150} height={272} />
          </div>
          <div className="info fw-bold mt-2">
            <Skeleton count={2} />
          </div>
        </div>
      </SkeletonTheme>
    ));
}

export default CastSkeleton