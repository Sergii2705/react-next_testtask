interface GoogleProps {
  lat: number,
  lng: number,
  text:string,
}

export const Marker:React.FC<GoogleProps> = ({ text }) => (
  <div className="w-32 flex justify-center items-center text-center text-white">
    {text}
  </div>
)
