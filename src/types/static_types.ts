/**
 * header links
 * @interface navLinks
 * @property {string} label - link label
 * @property {string} to - link path
 */
export interface NavLinks {
    label: string;
    to: string;
}

/**
 * footer links
 * @interface footerLinks
 * @property {string} title - link title
 * @property {object[]} list - link list
 * @property {string} list.name - link label
 * @property {string} list.href - link path
 */
export interface FooterLinks {
    title: string;
    list: {
        name: string;
        href: string;
    }[];
}

/**
 * social links
 * @interface socialLinks
 * @property {string} name - link label
 * @property {string} href - link path
 * @property {React.FC} icon - link icon
 */
export interface SocialLinks {
    name: string;
    href: string;
    icon: React.FC;
}

/**
 * service environtment
 * @interface serviceEnvirontment
 * @property {string} title - service title
 * @property {string[]} list - service list
 */
export interface ServiceEnvirontment {
    title: string;
    list: string[];
}

/**
 * service
 * @interface service
 * @property {string} label - service label
 * @property {string} value - service value
 */
export interface Service {
    label: string;
    value: string;
}

/**
 * contact info
 * @interface contactInfo
 * @property {string} text - contact info text
 * @property {React.FC} icon - contact info icon
 */
export interface ContactInfo {
    title: string;
    text: string;
    icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
}

/**
 * slide features
 * @interface slideFeatures
 * @property {string} equipment - equipment name
 * @property {string[]} features - equipment features
 * @property {string} image - equipment image
 */
export interface SlideFeatures {
    equipment: string;
    features: string[];
    image: string;
}

/**
 * success cases
 * @interface successCases
 * @property {string} name - success case name
 * @property {string} image - success case image
 */
export interface SuccessCases {
    name: string;
    image: string;
}