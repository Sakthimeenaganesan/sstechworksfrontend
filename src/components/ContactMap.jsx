import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import logoImg from "../assets/company.png"; // your logo

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "20px",
};

const center = {
  lat: 13.0220976,
  lng: 80.1725305,
};

export default function ContactMap() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker
          position={center}
          icon={{
            url: logoImg,
            scaledSize: new window.google.maps.Size(60, 60),
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}