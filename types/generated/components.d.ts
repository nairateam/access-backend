import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentContactForm extends Schema.Component {
  collectionName: 'components_component_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.String;
    subject: Attribute.String;
    message: Attribute.Text;
  };
}

export interface ComponentExpertise extends Schema.Component {
  collectionName: 'components_component_expertise';
  info: {
    displayName: 'Expertise';
  };
  attributes: {
    expertise: Attribute.Text;
  };
}

export interface ComponentMember extends Schema.Component {
  collectionName: 'components_component_members';
  info: {
    displayName: 'Member';
  };
  attributes: {
    image: Attribute.Media;
    Fullname: Attribute.String;
    position: Attribute.String;
    information: Attribute.RichText;
  };
}

export interface ComponentNavigationLinks extends Schema.Component {
  collectionName: 'components_component_navigation_links';
  info: {
    displayName: 'Navigation Links';
  };
  attributes: {
    Link: Attribute.Component<'elements.link', true>;
  };
}

export interface ComponentOffer extends Schema.Component {
  collectionName: 'components_component_offers';
  info: {
    displayName: 'Offer';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    IconImage: Attribute.Media;
    OfferTitle: Attribute.String;
    OfferItem: Attribute.Component<'elements.offer-list', true>;
  };
}

export interface ComponentOffering extends Schema.Component {
  collectionName: 'components_component_offerings';
  info: {
    displayName: 'Offering';
  };
  attributes: {
    OfferIcon: Attribute.Media;
    OfferingTitle: Attribute.String;
    OfferingList: Attribute.Component<'elements.offer-list', true>;
  };
}

export interface ComponentOurExpertise extends Schema.Component {
  collectionName: 'components_component_our_expertises';
  info: {
    displayName: 'Our Expertise';
  };
  attributes: {
    title: Attribute.String;
    Background: Attribute.Media;
    Expertise: Attribute.Component<'component.expertise', true>;
  };
}

export interface ComponentServiceCategory extends Schema.Component {
  collectionName: 'components_component_service_categories';
  info: {
    displayName: 'Service Category';
  };
  attributes: {
    Text: Attribute.Text;
    serviceCategory: Attribute.Component<
      'layout.service-category-holder',
      true
    >;
  };
}

export interface ComponentServiceComponent extends Schema.Component {
  collectionName: 'components_component_service_components';
  info: {
    displayName: 'Service Component';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Button: Attribute.Component<'elements.link'>;
    BackgroundImage: Attribute.Media;
  };
}

export interface ComponentSocialMediaLinks extends Schema.Component {
  collectionName: 'components_component_social_media_links';
  info: {
    displayName: 'Social Media Links';
  };
  attributes: {
    SocialLink: Attribute.Component<'elements.link', true>;
  };
}

export interface ComponentStepCard extends Schema.Component {
  collectionName: 'components_component_step_cards';
  info: {
    displayName: 'StepCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface ElementsDynamicTexts extends Schema.Component {
  collectionName: 'components_elements_dynamic_texts';
  info: {
    displayName: 'Dynamic Texts';
  };
  attributes: {
    Text: Attribute.String;
  };
}

export interface ElementsHeroHeading extends Schema.Component {
  collectionName: 'components_elements_hero_headings';
  info: {
    displayName: 'Hero Heading';
  };
  attributes: {
    Prefix: Attribute.String;
    HeadingText: Attribute.String;
    Icon: Attribute.Media;
    DynamicTexts: Attribute.Component<'elements.dynamic-texts', true>;
  };
}

export interface ElementsIconHeading extends Schema.Component {
  collectionName: 'components_elements_icon_headings';
  info: {
    displayName: 'Icon Heading';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    Heading: Attribute.String;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    Text: Attribute.String;
  };
}

export interface ElementsLogoLink extends Schema.Component {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    href: Attribute.String;
  };
}

export interface ElementsOfferList extends Schema.Component {
  collectionName: 'components_elements_offer_lists';
  info: {
    displayName: 'Offer List';
    description: '';
  };
  attributes: {
    offeritem: Attribute.String;
  };
}

export interface ElementsStepItem extends Schema.Component {
  collectionName: 'components_elements_step_items';
  info: {
    displayName: 'Step Item';
    description: '';
  };
  attributes: {
    StepItem: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ElementsValueCard extends Schema.Component {
  collectionName: 'components_elements_value_cards';
  info: {
    displayName: 'Value Card';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Text;
  };
}

export interface LayoutAboutUs extends Schema.Component {
  collectionName: 'components_layout_about_uses';
  info: {
    displayName: 'About Us';
  };
  attributes: {
    Title: Attribute.Component<'elements.icon-heading'>;
    Description: Attribute.Text;
    Button: Attribute.Component<'elements.link'>;
  };
}

export interface LayoutCompanySecondSection extends Schema.Component {
  collectionName: 'components_layout_company_second_sections';
  info: {
    displayName: 'Company Second Section';
  };
  attributes: {
    heading: Attribute.String;
    FirstDescription: Attribute.Text;
    SecondDescription: Attribute.Text;
  };
}

export interface LayoutFOoter extends Schema.Component {
  collectionName: 'components_layout_f_ooters';
  info: {
    displayName: 'fOOTER';
  };
  attributes: {
    FooterLogo: Attribute.Media;
    NavigationLinks: Attribute.Component<'component.navigation-links', true>;
    SocialLink: Attribute.Component<'component.social-media-links', true>;
  };
}

export interface LayoutGroupTeam extends Schema.Component {
  collectionName: 'components_layout_group_teams';
  info: {
    displayName: 'Group Team';
  };
  attributes: {
    Title: Attribute.String;
    member: Attribute.Component<'component.member', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Logo: Attribute.Media & Attribute.Required;
    MenuItem: Attribute.Component<'elements.link', true>;
    MenuButton: Attribute.Component<'elements.link'>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    Heading: Attribute.Component<'elements.hero-heading'>;
    BackgroundImage: Attribute.Media;
    Description: Attribute.Text;
    HeroButton: Attribute.Component<'elements.link'>;
  };
}

export interface LayoutKeySteps extends Schema.Component {
  collectionName: 'components_layout_key_steps';
  info: {
    displayName: 'Key Steps';
    description: '';
  };
  attributes: {
    Heading: Attribute.Component<'elements.icon-heading'>;
    value: Attribute.Component<'elements.step-item', true>;
  };
}

export interface LayoutMission extends Schema.Component {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'Mission';
  };
  attributes: {
    Heading: Attribute.Component<'elements.icon-heading'>;
  };
}

export interface LayoutOurOfferings extends Schema.Component {
  collectionName: 'components_layout_our_offerings';
  info: {
    displayName: 'Our Offerings';
    description: '';
  };
  attributes: {
    OfferHeading: Attribute.Component<'elements.icon-heading'>;
    Description: Attribute.Text;
    Button: Attribute.Component<'elements.link'>;
    OfferingCard: Attribute.Component<'component.offering', true>;
  };
}

export interface LayoutOurServices extends Schema.Component {
  collectionName: 'components_layout_our_services';
  info: {
    displayName: 'Our Services';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'elements.icon-heading'>;
    ServiceTitle: Attribute.Component<'component.service-component', true>;
  };
}

export interface LayoutServiceCategoryHolder extends Schema.Component {
  collectionName: 'components_layout_service_category_holders';
  info: {
    displayName: 'Service Category Holder';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface LayoutServicesHero extends Schema.Component {
  collectionName: 'components_layout_services_heroes';
  info: {
    displayName: 'Services Hero';
  };
  attributes: {
    title: Attribute.Component<'elements.icon-heading'>;
    Description: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface LayoutTopFooter extends Schema.Component {
  collectionName: 'components_layout_top_footers';
  info: {
    displayName: 'Top Footer';
  };
  attributes: {
    Phrase: Attribute.Text;
    CTA: Attribute.Component<'elements.link'>;
  };
}

export interface LayoutTopImages extends Schema.Component {
  collectionName: 'components_layout_top_images';
  info: {
    displayName: 'Top Images';
    description: '';
  };
  attributes: {
    Images: Attribute.Media;
    Heading: Attribute.Component<'elements.icon-heading'>;
  };
}

export interface LayoutTopNavigation extends Schema.Component {
  collectionName: 'components_layout_top_navigations';
  info: {
    displayName: 'Top Navigation';
  };
  attributes: {
    Logo: Attribute.Component<'elements.logo-link'>;
    link: Attribute.Component<'elements.link', true>;
    cta: Attribute.Component<'elements.link'>;
  };
}

export interface LayoutValueBannerSection extends Schema.Component {
  collectionName: 'components_layout_value_banner_sections';
  info: {
    displayName: 'Value Banner Section';
  };
  attributes: {
    Banner: Attribute.Media;
    Description: Attribute.Text;
    Hours: Attribute.String;
  };
}

export interface LayoutValueProposition extends Schema.Component {
  collectionName: 'components_layout_value_propositions';
  info: {
    displayName: 'Value Proposition';
  };
  attributes: {
    Title: Attribute.Component<'elements.icon-heading'>;
    Description: Attribute.Text;
    Value: Attribute.Component<'elements.value-card', true>;
    ValueBanner: Attribute.Component<'layout.value-banner-section'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.contact-form': ComponentContactForm;
      'component.expertise': ComponentExpertise;
      'component.member': ComponentMember;
      'component.navigation-links': ComponentNavigationLinks;
      'component.offer': ComponentOffer;
      'component.offering': ComponentOffering;
      'component.our-expertise': ComponentOurExpertise;
      'component.service-category': ComponentServiceCategory;
      'component.service-component': ComponentServiceComponent;
      'component.social-media-links': ComponentSocialMediaLinks;
      'component.step-card': ComponentStepCard;
      'elements.dynamic-texts': ElementsDynamicTexts;
      'elements.hero-heading': ElementsHeroHeading;
      'elements.icon-heading': ElementsIconHeading;
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'elements.offer-list': ElementsOfferList;
      'elements.step-item': ElementsStepItem;
      'elements.value-card': ElementsValueCard;
      'layout.about-us': LayoutAboutUs;
      'layout.company-second-section': LayoutCompanySecondSection;
      'layout.f-ooter': LayoutFOoter;
      'layout.group-team': LayoutGroupTeam;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.key-steps': LayoutKeySteps;
      'layout.mission': LayoutMission;
      'layout.our-offerings': LayoutOurOfferings;
      'layout.our-services': LayoutOurServices;
      'layout.service-category-holder': LayoutServiceCategoryHolder;
      'layout.services-hero': LayoutServicesHero;
      'layout.top-footer': LayoutTopFooter;
      'layout.top-images': LayoutTopImages;
      'layout.top-navigation': LayoutTopNavigation;
      'layout.value-banner-section': LayoutValueBannerSection;
      'layout.value-proposition': LayoutValueProposition;
    }
  }
}
