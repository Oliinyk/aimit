/**
 * Loads common data that many pages might use
 */
export default async function ({ $prismic }, inject) {
  // const footerData = (
  //   await $prismic.api.getByUID('standard_footer_1', 'standard')
  // ).data;

  // const footerProps = {
  //   tagline: $prismic.asText(footerData.tagline),
  //   copyrightLine: $prismic.asText(footerData.copyright_line),
  //   social: {
  //     title: $prismic.asText(footerData.label__connect_with_us_here),
  //     links: footerData.social_links,
  //   },
  //   nav: footerData.body
  //     .filter((s) => s.slice_type === 'nav_group')
  //     .map((navGroup) => {
  //       return {
  //         title: navGroup.primary.group_title,
  //         links: navGroup.items,
  //       };
  //     }),
  // };

//   inject('siteData', (id) => {
//     switch (id) {
//       case 'footerProps':
//         return footerProps;
//     }

//     console.error(`Unknown data id ${id}`);
//     return undefined;
//   });
 }
