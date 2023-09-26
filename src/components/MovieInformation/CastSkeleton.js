import React from 'react'
import Skeleton from 'react-loading-skeleton'

function CastSkeleton() {
  return (
    <div className="cast-skeleton d-flex align-items-center  flex-column">
      <div className="image">
        <Skeleton width={150} height={272} />
      </div>
      <div className="info fw-bold mt-2">
        <Skeleton count={2} />
      </div>
    </div>
  );
}

export default CastSkeleton