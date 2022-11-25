import { TypeJob } from '../type/TypeJobs';
import { FiBookmark } from 'react-icons/fi'; 
import { BsShareFill, BsFillGeoAltFill } from 'react-icons/bs';
import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import { formatSalary, howLongAgoPosted } from '../utils';
import { Description } from './Description';
import { Marker } from './Marker';

interface Props {
  job: TypeJob,
}

export const DetailedJob:React.FC<Props> = ({ job }) => {
  const {
    name,
    email,
    phone,
    title,
    address,
    salary,
    description,
    employment_type,
    pictures,
    benefits,
    location,
    createdAt,
  } =job;

  return (
    <div className="block min-w-75.5 lg:grid lg:grid-cols-detailed mt-16 gap-x-8 lg:gap-x-10 xl:gap-x-33 overflow-hidden">
      <div className="flex flex-col">
    
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-[28px] font-bold leading-6 text-dark-gray"> Job Details</h1>
          <hr className="md:hidden mt-3 text-dark-gray bg-dark-gray h-1/4" />
          <div className="mt-6 md:mt-0 flex gap-x-8">
            <div className="flex items-center gap-x-4 text-lg cursor-pointer">
              <FiBookmark className="inline text-xl text-middle-gray"/>
              Save to my list
            </div>
            <div className="flex items-center gap-x-4 text-lg cursor-pointer">
              <BsShareFill className="inline text-middle-gray"/>
              Share
            </div>
          </div>
        </div>
      
        <hr className="hidden md:block text-dark-gray bg-dark-gray h-1/4 mt-2" />
 
        <button className="hidden md:flex justify-center items-center uppercase text-white 
                          font-bold text-xs bg-light-gray mt-10 h-13 w-32 rounded-lg">
          apply now
        </button>

        <div className="block md:flex justify-between mt-8 gap-x-12">
          <h2 className="text-dark-gray font-bold text-2xl leading-7.5 text-justify">
            {title}
          </h2>

          <div className="mt-[5px] md:mt-0 flex flex-row justify-between items-center">
            <p className="md:hidden text-sm ms:text-xs leading-6.25 text-p-gray" title={createdAt}>
              {howLongAgoPosted(createdAt)}
            </p>
            <div className="text-right md:text-left md:w-45 ">
              <p className="text-dark-gray text-lg leading-6">
                Brutto, per year
              </p> 
              <h3 className="md:order-2 text-xl leading-6 text-dark-gray font-bold ">
                {formatSalary(salary)}
              </h3>
            </div>
          </div>
        </div>

        <p className="hidden md:block mt-2 text-lg leading-6 text-p-gray" title={createdAt}>
          {howLongAgoPosted(createdAt)}
        </p>

        <div className="mt-4 md:mt-2 text-justify">
          <Description  description={description} />
        </div>

        <button className="md:hidden mx-auto flex justify-center items-center uppercase text-white 
                          font-bold text-xs bg-light-gray mt-10 h-13 w-32 rounded-lg">
          apply now
        </button>

        <div className="flex flex-col">
          <div className="lg:order-2 mt-34 md:mt-22">
            <h3 className="text-dark-gray font-bold text-xl leading-9"> 
              Attached images
            </h3>
            <hr className="text-dark-gray bg-dark-gray h-1/4 mt-2" />
            <div className="mt-6 flex gap-x-3  lg:w-141 xl:w-full overflow-x-auto">
              {pictures.map((picture, index) => (
                <Image 
                  key={index}
                  className="min-w-50 h-32.5 rounded-lg" 
                  src={`${picture}?random=${job.id + index}`} 
                  alt="place" 
                  width={200} 
                  height={130}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-14 md:mt-22">
            <h3 className="text-dark-gray font-bold text-xl leading-8"> 
              Additional info
            </h3>
            
            <hr className="text-dark-gray bg-dark-gray h-[1px] mt-2" />     

            <h4 className="mt-4 text-dark-gray text-lg leading-6">
              Employment type
            </h4>

            <div className="flex gap-x-2 mt-2.5 lg:w-141 xl:w-full overflow-x-auto">
              {employment_type.map((type, index) => (
                <button 
                  key={index}
                  className="w-55 h-12.5 rounded-lg bg-white-gray font-bold
                            text-blue-gray text-base leading-4 border border-b-gray" 
                >
                  {type}
                </button>
              ))}
            </div>  

            <h4 className="mt-6 text-dark-gray text-lg leading-6">
              Benefits
            </h4>      
            <div className="flex gap-x-2 mt-2.5 lg:w-141 xl:w-full overflow-x-auto">
              {benefits.map((type, index) => (
                <button 
                  key={index}
                  className="w-[220px] h-[50px] rounded-lg bg-c-yellow font-bold text-blue-gray 
                              text-base leading-4 border border-b-yellow" 
                >
                  {type}
                </button>
              ))}
            </div>


          </div>
        </div>

      </div>
      
      <div className="mt-16 lg:mt-0">
        <div className="lg:hidden">
          <h3 className="text-7 leading-9 font-bold text-dark-gray">
            Contacts
          </h3>
  
          <hr className="text-dark-gray bg-dark-gray h-1/4 mt-2.5" />  
        </div>

        <div className="flex flex-col justify-between relative mt-5 lg:mt-0 h-109 
                      w-75.5 sm:w-100.5 bg-dark-gray rounded-lg mx-auto overflow-hidden">
          <div className="absolute -translate-y-3 -translate-x-19 h-68.25 w-68.25 rounded-full bg-c-dark"/>
          
          <div className="relative z-2 mt-8 ml-6 ms:ml-16  text-t-gray font-normal text-lg leading-6">
            <h3 className="font-bold text-xl leading-6"> 
              Department name.<br/>
              {name}
            </h3>

            <p className="mt-2 ">
              <BsFillGeoAltFill className="inline h-[18px] -translate-y-1 mr-1.5"/>
              {address}
            </p>

            <p className="mt-2 text-lg leading-6">
              {phone}
            </p>

            <p className="text-lg leading-6">
              {email}
            </p>
          </div>

          <div className="h-1/2 w-full grayscale">

            <GoogleMapReact
              bootstrapURLKeys={{ key: "__GOOGLE_MAP_API_KEY__" }}  // you must get your own key from the link https://cloud.google.com/
              defaultCenter={{ lat: location.lat, lng: location.long }}
              defaultZoom={11}
            >
              <Marker
                lat={location.lat}
                lng={location.long}
                text={address}
              />
            </GoogleMapReact>
          </div>          
        </div>
      </div> 
    </div>
  )
}