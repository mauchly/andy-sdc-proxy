var template = function(photos) {
  return (
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Mock Airbnb Listing Page</title>
        <script
          crossorigin
          src="https://unpkg.com/react@16/umd/react.development.js"
        ></script>
        <script
          crossorigin
          src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
        ></script>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        ${photos}
        <div id="reservationParent">
          <div id="reservation"></div>
        </div>
        <div id="reviews"></div>
        <img
          id="afterReviews1"
          src="https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/AfterReviewsHardcodePhoto1.png"
        />
        <img
          id="afterReviews2"
          src="https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/AfterReviewsHardcodePhoto2.png"
        />
        <img
          id="afterReviews3"
          src="https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/AfterReviewsHardcodePhoto3.png"
        />
        <div id="recommendations" style="margin: 50px 0 400px 200px;"></div>
        <img
          id="afterReviews4"
          src="https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/listingBottomHardcodePhoto.png"
        />
        <script src="http://ec2-3-101-33-236.us-west-1.compute.amazonaws.com/bundle.js" async></script>
        <!-- <script src="http://ec2-13-57-200-251.us-west-1.compute.amazonaws.com/bundle.js"></script> -->
        <script src="http://ec2-54-193-158-99.us-west-1.compute.amazonaws.com:3001/bundle.js" async></script>
        <script src="http://52.52.28.79/bundle.js" async></script>
      </body>
    </html>
    `
  )
}
module.exports = {template};