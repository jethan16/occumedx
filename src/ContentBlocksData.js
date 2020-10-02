// import { graphql } from 'gatsby';
// import { faMapMarkerAlt, faDollarSign, faStar, faChevronDown, faBookMedical, faBolt, faChartLine, faAmbulance, faCompass } from '@fortawesome/free-solid-svg-icons'


// const contentFunction = ({ data }) => {

// const contentBlocks = {
//     About: { 
//       componentTitle: data.about.componentTitle,
//       componentOverviewBody: data.about.componentOverviewBody,
//       Content: [
//         {
//           icon: faMapMarkerAlt,
//           title: data.about.titleOne,
//           text: data.about.bodyOne,
//           buttonText: 'See More Services',
//           linkPath: '/services/'
//         },
//         {
//           icon: faDollarSign,
//           title: data.about.titleTwo,
//           text: data.about.bodyTwo,
//           buttonText: 'Learn More About Us',
//           linkPath: '/about/'
//         },
//         {
//           icon: faStar,
//           title: data.about.titleThree,
//           text: data.about.bodyThree,
//           buttonText: 'See Our Partners',
//           linkPath: '#partners'
//         }
//       ]
//     },
//    Services: [
//       {
//         icon: faChartLine,
//         title: data.services.titleOne,
//         text: data.services.bodyOne,
//         buttonText: '',
//         linkPath: '/services/'
//       },
//       {
//         icon: faBookMedical,
//         title: data.services.titleTwo,
//         text: data.services.bodyTwo,
//         buttonText: '',
//         linkPath: '/services/'
//       },
//       {
//         icon: faBolt,
//         title: data.services.titleThree,
//         text: data.services.bodyThree,
//         buttonText: '',
//         linkPath: '/services/'
//       },
//       {
//         icon: faAmbulance,
//         title: data.services.titleFour,
//         text: data.services.bodyFour,
//         buttonText: '',
//         linkPath: '/services/'
//       },
//       {
//         icon: faCompass,
//         title: data.services.titleFive,
//         text: data.services.bodyFive,
//         buttonText: '',
//         linkPath: '/services/'
//       },
//     ]
// }

// return contentBlocks;
// };
//   export const query = graphql`
//   query ContentQuery {
//     about: datoCmsHomePageAboutOverview {
//       bodyOne
//       bodyThree
//       bodyTwo
//       titleOne
//       titleThree
//       titleTwo
//       componentOverviewBody
//       componentTitle
//     }
//     services: datoCmsHomePageServicesOverview {
//       bodyFive
//       bodyFour
//       bodyOne
//       bodySix
//       bodyThree
//       bodyTwo
//       componentTitle
//       componentOverviewBody
//       titleOne
//       titleTwo
//       titleFour
//       titleFive
//       titleSix
//       titleThree
//     }
//   }
// `
//   export default contentFunction;