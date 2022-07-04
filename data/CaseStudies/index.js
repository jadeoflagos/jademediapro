/**
 * @typedef {Array<string>} Paragraph
 */
/**
 * @typedef CaseStudy
 * @property {string} name The case study name.
 * @property {string} header The header image of the case study.
 * @property {Object} assets additional images.
 * @property {Paragraph} challenge The case study challenge.
 * @property {Paragraph} analysis The case study analysis.
 * @property {Paragraph} design The case study design.
 * @property {Paragraph} development The case study development.
 * @property {Paragraph} strategy The case study strategy.
 * @property {Paragraph} production The case study production.
 * @property {Paragraph} editing The case study editing.
 * @property {Paragraph} content The case study content.
 * @property {Paragraph} collateralContents The case study collateral contents.
 */

import Tozome from "./tozome";
import Developful from "./developful";

const CaseStudies = {
  tozome: Tozome,
  developful: Developful,
};

export default CaseStudies;
