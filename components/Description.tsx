import { parseDescription } from "../utils";

interface Props {
  description: string;
} 

export const Description: React.FC<Props> = ({ description }) => {
  const [beginning, responsopilities, compensationAndBenefits] = parseDescription(description);

  return (
    <>
      <p className="text-lg leading-6 text-dark-gray">
        {beginning}
      </p>
      
      {!!responsopilities &&
        <>
          <h3 className="mt-9 font-bold text-xl leading-6">
            Responsopilities:
          </h3>

          <div className="mt-2 text-lg leading-6 text-dark-gray">
            {responsopilities.map(item => (
              <p key={item} >
                {item}
              </p>
            ))}
          </div>
        </> 
      }

      {!!compensationAndBenefits.length &&
        <>
          <h3 className="mt-9 font-bold text-xl leading-6">
            Compensation & Benefits:
          </h3>
          <ul className="mt-2 list-inside list-square text-lg leading-6 text-dark-gray">
            {compensationAndBenefits.map(item => (
              <li key={item} >
                {item}
              </li>
            ))}
          </ul>
        </> 
      }
    </>
  )
} 