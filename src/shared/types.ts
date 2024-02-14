export enum SelectedPage {
  Home = "Home",
  Benefits = "Benefits",
  OurClasses = "Our Classes",
  ContactUs = "Contact Us",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}