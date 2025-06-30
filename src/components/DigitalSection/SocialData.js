import cloud_platforms from '../../images/cloud_platforms.png'
import architecture from '../../videos/architecture.mp4'


export const homeObjOne = {
  id: 'on-demand',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'On-demand',
  headline: 'Cloud Architecture',
  description:
    `Architecture on demand is a flexible cloud computing model that dynamically provisions resources based on real-time requirements.\n
     It allows businesses to scale infrastructure up or down automatically as demand fluctuates, optimizing performance and cost. \n
     Key components include compute instances, storage, networking, and databases, all managed through orchestration tools and APIs. \n
     This architecture supports high availability and fault tolerance by distributing resources across multiple locations. It is ideal for environments with unpredictable workloads, such as e-commerce, streaming services, and SaaS platforms.`,
  buttonLabel: 'Home',
  imgStart: false,
  video: architecture,
  alt: 'Piggybank',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'platforms',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Platforms',
  headline: 'Cloud Platforms',
  description:
    `Migrating from on-premises servers to cloud platforms is a crucial step for many businesses seeking scalability, cost-efficiency, and enhanced performance.\n
    We are the experts to move your infrastructure from On-prem servers to the Major 3 cloud platforms: \n
    1. Amazon Web Services\n
    2. Microsoft Azure\n
    3. Google Cloud Platform`,
  buttonLabel: 'Scroll Top',
  imgStart: true,
  img: cloud_platforms,
  alt: 'genai',
  dark: false,
  primary: false,
  darkText: true
};

// export const homeObjThree = {
//   id: 'contactus',
//   lightBg: true,
//   lightText: false,
//   lightTextDesc: false,
//   topLine: 'Join our Team',
//   headline: 'Joining Our Team is Easy',
//   description:
//     "Contact us to know more about open position",
//   buttonLabel: 'Contact Us',
//   imgStart: false,
//   img: contact_us,
//   alt: 'Papers',
//   dark: false,
//   primary: false,
//   darkText: true
// };
