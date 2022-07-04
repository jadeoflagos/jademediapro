/**
 * @typedef {Array<string>} Paragraph
 */
/**
 * @typedef CaseStudy
 * @property {string} name The case study name.
 * @property {string} header The header image of the case study.
 * @property {Paragraph} assets additional images.
 * @property {Paragraph} challenge The case study challenge.
 * @property {Paragraph} analysis The case study analysis.
 * @property {Paragraph} strategy The case study strategy.
 * @property {Paragraph} production The case study production.
 * @property {Paragraph} editing The case study editing.
 * @property {Paragraph} content The case study content.
 */

import Tozome from "./tozome";

const CaseStudies = {
  tozome: Tozome,
};

export default CaseStudies;
