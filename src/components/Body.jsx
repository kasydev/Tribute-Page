import React from "react";
import tribute from '../assets/tribute.jpg'

const Body = () => {
  return (
    <div className="w-[85%] mx-auto  ">
      <figure>
        <img
          className="shadow-md shadow-black rounded-md mx-auto cursor-pointer transition duration-150 ease-in-out mb-4"
          src={tribute}
          alt="Dr. Norman Borlaug details"
        />
        <figcaption className="text-center text-sm mb-5 transition ease-in-out duration-150">
          Dr. Norman Borlaug, third from the left, trains biologists in Mexico
          on how to increase wheat yields - part of his life-long war on hunger.
        </figcaption>
      </figure>
      <h2 className="font-semibold text-2xl md:text-4xl mb-4">
        Here's a time line of Dr. Borlaug's life:
      </h2>
      <ul className="list-disc  ml-4 mb-5">
        <li>
          <span className="font-bold">1914</span> - Born in Cresco, lowa.
        </li>
        <li>
          <spa className="font-bold">1933</spa> - Leaves his family's farm to
          attend the University of Minnesota, thanks to a Depression era program
          known as the "National Youth Administration."
        </li>
        <li>
          <span className="font-bold">1935</span> - Has to stop and save up more
          money. Works in the Civilian Conservation Corps, helping starving
          Americans. "I saw how food changes them", he said. "All of this left
          scars on me."
        </li>
        <li>
          <span className="font-bold">1937</span> - Finishes university and
          takes a job in the US Forestry Service.
        </li>
        <li>
          <span className="font-bold">1938</span> - Marries wife of 69 years
          Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin
          Charles Stakman, he returns to school study under Stakman, who teaches
          him about breeding pest-resistant plants.
        </li>
        <li>
          <span className="font-bold">1941</span> - Tries to enroll in the
          military after the Pearl Harbor attack, but is rejected instead, the
          military asked his lab to work on waterproof glue, DDT to control
          malaria, disinfectants, and other applied science.
        </li>
        <li>
          <span className="font-bold">1942</span> - Receives a Ph.D. in Genetics
          and Plant Pathology.
        </li>
        <li>
          <span className="font-bold">1944</span> - Rejects a 100% salary
          increase from Dupont, leaves behind his pregnant wife, and flies to
          Mexico to head a new plant pathology program. Over the next 16 years,
          his team breeds 6,000 different strains of disease resistent wheat -
          including different varieties for each major climate on Earth.
        </li>
        <li>
          <span className="font-bold">1945</span> - Discovers a way to grown
          wheat twice each season, doubling wheat yields.
        </li>
        <li>
          <span className="font-bold">1953</span> - crosses a short, sturdy
          dwarf breed of wheat with a high-yeidling American breed, creating a
          strain that responds well to fertilizer. It goes on to provide 95% of
          Mexico's wheat.
        </li>
        <li>
          <span className="font-bold">1962</span> - Visits Delhi and brings his
          high-yielding strains of wheat to the Indian subcontinent in time to
          help mitigate mass starvation due to a rapidly expanding population.
        </li>
        <li>
          <span className="font-bold">1970</span> - receives the Nobel Peace
          Prize.
        </li>
        <li>
          <span>1983</span> - helps seven African countries dramatically
          increase their maize and sorghum.
        </li>
        <li>
          <span className="font-bold">1984</span> - becomes a distinguished
          professor at Texas A&M University.
        </li>
        <li>
          <span className="font-bold">2005</span> - states "we will have to
          double the world food supply by 2050." Argues that genetically
          modified crops are the only way we can meet the demand, as we run out
          of arable land. Says that GM crops are not inherently dangerous
          because "we've been genetically modifying plants and animals for a
          long time. Long before we called it science, people were selecting the
          best breeds."
        </li>
        <li>
          <span className="font-bold">2009</span> - dies at the age of 95.
        </li>
      </ul>
      <q className="mt-4">
        <i>
          Borlaug's life and achievement are testimony to the far-reaching
          contribution that one man's towering intellect, persistence and
          scientific vision can make to human peace and progress.
        </i>
      </q>
      <p className="mt-4 text-md mb-5"><i>-- Indian Prime Minister Manmohan Singh</i></p>
    </div>
  );
};

export default Body;
