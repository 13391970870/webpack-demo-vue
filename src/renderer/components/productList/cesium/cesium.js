import Cesium from 'cesium/Source/Cesium'

const test = () => {
  buildCeisum();
}

function buildCeisum() {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMTk4ZTYyNy00MjkxLTRmZWYtOTg1MS0wOThjM2YzMzIzYzEiLCJpZCI6NzEyMSwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODMxNzI5OX0.rKV8Ldl_bgR3lVvNsbHhTX62j8JH8ADCIWAwk7tXpr8';
  const viewer = new Cesium.Viewer('cesiumContainer', {})

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(116.2317, 39.5427, 15000.0)
  });


}

export {
  test
}