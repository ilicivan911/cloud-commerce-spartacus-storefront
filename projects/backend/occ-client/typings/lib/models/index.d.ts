import * as msRest from "ms-rest-js";
/**
 * @interface
 * An interface representing Country.
 */
export interface Country {
    /**
     * @member {string} [isocode]
     */
    isocode?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing Region.
 */
export interface Region {
    /**
     * @member {string} [countryIso]
     */
    countryIso?: string;
    /**
     * @member {string} [isocode]
     */
    isocode?: string;
    /**
     * @member {string} [isocodeShort]
     */
    isocodeShort?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing Address.
 */
export interface Address {
    /**
     * @member {string} [companyName]
     */
    companyName?: string;
    /**
     * @member {Country} [country]
     */
    country?: Country;
    /**
     * @member {boolean} [defaultAddress]
     */
    defaultAddress?: boolean;
    /**
     * @member {string} [email]
     */
    email?: string;
    /**
     * @member {string} [firstName]
     */
    firstName?: string;
    /**
     * @member {string} [formattedAddress]
     */
    formattedAddress?: string;
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {string} [lastName]
     */
    lastName?: string;
    /**
     * @member {string} [line1]
     */
    line1?: string;
    /**
     * @member {string} [line2]
     */
    line2?: string;
    /**
     * @member {string} [phone]
     */
    phone?: string;
    /**
     * @member {string} [postalCode]
     */
    postalCode?: string;
    /**
     * @member {Region} [region]
     */
    region?: Region;
    /**
     * @member {boolean} [shippingAddress]
     */
    shippingAddress?: boolean;
    /**
     * @member {string} [title]
     */
    title?: string;
    /**
     * @member {string} [titleCode]
     */
    titleCode?: string;
    /**
     * @member {string} [town]
     */
    town?: string;
    /**
     * @member {boolean} [visibleInAddressBook]
     */
    visibleInAddressBook?: boolean;
}
/**
 * @interface
 * An interface representing AddressList.
 */
export interface AddressList {
    /**
     * @member {Address[]} [addresses]
     */
    addresses?: Address[];
}
/**
 * @interface
 * An interface representing ErrorModel.
 * Error message
 *
 */
export interface ErrorModel {
    /**
     * @member {string} [message] Descriptive, human readable error message.
     */
    message?: string;
    /**
     * @member {string} [reason] Additional classification specific for each
     * error type e.g. 'noStock'.
     */
    reason?: string;
    /**
     * @member {string} [subject] Identifier of the related object e.g. '1'.
     */
    subject?: string;
    /**
     * @member {string} [subjectType] Type of the object related to the error
     * e.g. 'entry'.
     */
    subjectType?: string;
    /**
     * @member {string} [type] Type of the error e.g. 'LowStockError'.
     */
    type?: string;
}
/**
 * @interface
 * An interface representing ErrorList.
 * List of errors
 *
 */
export interface ErrorList {
    /**
     * @member {ErrorModel[]} [errors]
     */
    errors?: ErrorModel[];
}
/**
 * @interface
 * An interface representing AddressValidation.
 */
export interface AddressValidation {
    /**
     * @member {string} [decision]
     */
    decision?: string;
    /**
     * @member {ErrorList} [errors]
     */
    errors?: ErrorList;
    /**
     * @member {Address[]} [suggestedAddresses]
     */
    suggestedAddresses?: Address[];
}
/**
 * @interface
 * An interface representing Price.
 */
export interface Price {
    /**
     * @member {string} [currencyIso]
     */
    currencyIso?: string;
    /**
     * @member {string} [formattedValue]
     */
    formattedValue?: string;
    /**
     * @member {number} [maxQuantity]
     */
    maxQuantity?: number;
    /**
     * @member {number} [minQuantity]
     */
    minQuantity?: number;
    /**
     * @member {PriceType} [priceType] Possible values include: 'BUY', 'FROM'
     */
    priceType?: PriceType;
    /**
     * @member {number} [value]
     */
    value?: number;
}
/**
 * @interface
 * An interface representing Stock.
 */
export interface Stock {
    /**
     * @member {number} [stockLevel]
     */
    stockLevel?: number;
    /**
     * @member {string} [stockLevelStatus]
     */
    stockLevelStatus?: string;
}
/**
 * @interface
 * An interface representing Image.
 */
export interface Image {
    /**
     * @member {string} [altText]
     */
    altText?: string;
    /**
     * @member {string} [format]
     */
    format?: string;
    /**
     * @member {number} [galleryIndex]
     */
    galleryIndex?: number;
    /**
     * @member {ImageType} [imageType] Possible values include: 'PRIMARY',
     * 'GALLERY'
     */
    imageType?: ImageType;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing VariantOptionQualifier.
 */
export interface VariantOptionQualifier {
    /**
     * @member {Image} [image]
     */
    image?: Image;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [qualifier]
     */
    qualifier?: string;
    /**
     * @member {string} [value]
     */
    value?: string;
}
/**
 * @interface
 * An interface representing VariantOption.
 */
export interface VariantOption {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Price} [priceData]
     */
    priceData?: Price;
    /**
     * @member {Stock} [stock]
     */
    stock?: Stock;
    /**
     * @member {string} [url]
     */
    url?: string;
    /**
     * @member {VariantOptionQualifier[]} [variantOptionQualifiers]
     */
    variantOptionQualifiers?: VariantOptionQualifier[];
}
/**
 * @interface
 * An interface representing BaseOption.
 */
export interface BaseOption {
    /**
     * @member {VariantOption[]} [options]
     */
    options?: VariantOption[];
    /**
     * @member {VariantOption} [selected]
     */
    selected?: VariantOption;
    /**
     * @member {string} [variantType]
     */
    variantType?: string;
}
/**
 * @interface
 * An interface representing SearchQuery.
 */
export interface SearchQuery {
    /**
     * @member {string} [value]
     */
    value?: string;
}
/**
 * @interface
 * An interface representing SearchState.
 */
export interface SearchState {
    /**
     * @member {SearchQuery} [query]
     */
    query?: SearchQuery;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing Breadcrumb.
 */
export interface Breadcrumb {
    /**
     * @member {string} [facetCode]
     */
    facetCode?: string;
    /**
     * @member {string} [facetName]
     */
    facetName?: string;
    /**
     * @member {string} [facetValueCode]
     */
    facetValueCode?: string;
    /**
     * @member {string} [facetValueName]
     */
    facetValueName?: string;
    /**
     * @member {SearchState} [removeQuery]
     */
    removeQuery?: SearchState;
    /**
     * @member {SearchState} [truncateQuery]
     */
    truncateQuery?: SearchState;
}
/**
 * @interface
 * An interface representing Component.
 */
export interface Component {
    /**
     * @member {Date} [modifiedtime]
     */
    modifiedtime?: Date;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {any} [otherProperties]
     */
    otherProperties?: any;
    /**
     * @member {string} [typeCode]
     */
    typeCode?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing ComponentList.
 */
export interface ComponentList {
    /**
     * @member {Component[]} [component]
     */
    component?: Component[];
}
/**
 * @interface
 * An interface representing ContentSlot.
 */
export interface ContentSlot {
    /**
     * @member {ComponentList} [components]
     */
    components?: ComponentList;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [position]
     */
    position?: string;
    /**
     * @member {string} [slotId]
     */
    slotId?: string;
    /**
     * @member {boolean} [slotShared]
     */
    slotShared?: boolean;
    /**
     * @member {string} [slotStatus]
     */
    slotStatus?: string;
}
/**
 * @interface
 * An interface representing ContentSlotList.
 */
export interface ContentSlotList {
    /**
     * @member {ContentSlot[]} [contentSlot]
     */
    contentSlot?: ContentSlot[];
}
/**
 * @interface
 * An interface representing CMSPage.
 */
export interface CMSPage {
    /**
     * @member {ContentSlotList} [contentSlots]
     */
    contentSlots?: ContentSlotList;
    /**
     * @member {boolean} [defaultPage]
     */
    defaultPage?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [template]
     */
    template?: string;
    /**
     * @member {string} [title]
     */
    title?: string;
    /**
     * @member {string} [typeCode]
     */
    typeCode?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing CardType.
 */
export interface CardType {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CardTypeList.
 */
export interface CardTypeList {
    /**
     * @member {CardType[]} [cardTypes]
     */
    cardTypes?: CardType[];
}
/**
 * @interface
 * An interface representing PromotionOrderEntryConsumed.
 */
export interface PromotionOrderEntryConsumed {
    /**
     * @member {number} [adjustedUnitPrice]
     */
    adjustedUnitPrice?: number;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {number} [orderEntryNumber]
     */
    orderEntryNumber?: number;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
}
/**
 * @interface
 * An interface representing PromotionRestriction.
 */
export interface PromotionRestriction {
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [restrictionType]
     */
    restrictionType?: string;
}
/**
 * @interface
 * An interface representing Promotion.
 */
export interface Promotion {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string[]} [couldFireMessages]
     */
    couldFireMessages?: string[];
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {boolean} [enabled]
     */
    enabled?: boolean;
    /**
     * @member {Date} [endDate]
     */
    endDate?: Date;
    /**
     * @member {string[]} [firedMessages]
     */
    firedMessages?: string[];
    /**
     * @member {number} [priority]
     */
    priority?: number;
    /**
     * @member {Image} [productBanner]
     */
    productBanner?: Image;
    /**
     * @member {string} [promotionGroup]
     */
    promotionGroup?: string;
    /**
     * @member {string} [promotionType]
     */
    promotionType?: string;
    /**
     * @member {PromotionRestriction[]} [restrictions]
     */
    restrictions?: PromotionRestriction[];
    /**
     * @member {Date} [startDate]
     */
    startDate?: Date;
    /**
     * @member {string} [title]
     */
    title?: string;
}
/**
 * @interface
 * An interface representing PromotionResult.
 */
export interface PromotionResult {
    /**
     * @member {PromotionOrderEntryConsumed[]} [consumedEntries]
     */
    consumedEntries?: PromotionOrderEntryConsumed[];
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {Promotion} [promotion]
     */
    promotion?: Promotion;
}
/**
 * @interface
 * An interface representing Currency.
 */
export interface Currency {
    /**
     * @member {boolean} [active]
     */
    active?: boolean;
    /**
     * @member {string} [isocode]
     */
    isocode?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [symbol]
     */
    symbol?: string;
}
/**
 * @interface
 * An interface representing Voucher.
 */
export interface Voucher {
    /**
     * @member {Price} [appliedValue]
     */
    appliedValue?: Price;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Currency} [currency]
     */
    currency?: Currency;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {boolean} [freeShipping]
     */
    freeShipping?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [value]
     */
    value?: number;
    /**
     * @member {string} [valueFormatted]
     */
    valueFormatted?: string;
    /**
     * @member {string} [valueString]
     */
    valueString?: string;
    /**
     * @member {string} [voucherCode]
     */
    voucherCode?: string;
}
/**
 * @interface
 * An interface representing DeliveryMode.
 */
export interface DeliveryMode {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Price} [deliveryCost]
     */
    deliveryCost?: Price;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing GeoPoint.
 */
export interface GeoPoint {
    /**
     * @member {number} [latitude]
     */
    latitude?: number;
    /**
     * @member {number} [longitude]
     */
    longitude?: number;
}
/**
 * @interface
 * An interface representing Time.
 */
export interface Time {
    /**
     * @member {string} [formattedHour]
     */
    formattedHour?: string;
    /**
     * @member {Uint8Array} [hour]
     */
    hour?: Uint8Array;
    /**
     * @member {Uint8Array} [minute]
     */
    minute?: Uint8Array;
}
/**
 * @interface
 * An interface representing SpecialOpeningDay.
 */
export interface SpecialOpeningDay {
    /**
     * @member {boolean} [closed]
     */
    closed?: boolean;
    /**
     * @member {Time} [closingTime]
     */
    closingTime?: Time;
    /**
     * @member {string} [comment]
     */
    comment?: string;
    /**
     * @member {Date} [date]
     */
    date?: Date;
    /**
     * @member {string} [formattedDate]
     */
    formattedDate?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {Time} [openingTime]
     */
    openingTime?: Time;
}
/**
 * @interface
 * An interface representing WeekdayOpeningDay.
 */
export interface WeekdayOpeningDay {
    /**
     * @member {boolean} [closed]
     */
    closed?: boolean;
    /**
     * @member {Time} [closingTime]
     */
    closingTime?: Time;
    /**
     * @member {Time} [openingTime]
     */
    openingTime?: Time;
    /**
     * @member {string} [weekDay]
     */
    weekDay?: string;
}
/**
 * @interface
 * An interface representing OpeningSchedule.
 */
export interface OpeningSchedule {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {SpecialOpeningDay[]} [specialDayOpeningList]
     */
    specialDayOpeningList?: SpecialOpeningDay[];
    /**
     * @member {WeekdayOpeningDay[]} [weekDayOpeningList]
     */
    weekDayOpeningList?: WeekdayOpeningDay[];
}
/**
 * @interface
 * An interface representing PointOfService.
 */
export interface PointOfService {
    /**
     * @member {Address} [address]
     */
    address?: Address;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [displayName]
     */
    displayName?: string;
    /**
     * @member {number} [distanceKm]
     */
    distanceKm?: number;
    /**
     * @member {{ [propertyName: string]: string }} [features]
     */
    features?: {
        [propertyName: string]: string;
    };
    /**
     * @member {string} [formattedDistance]
     */
    formattedDistance?: string;
    /**
     * @member {GeoPoint} [geoPoint]
     */
    geoPoint?: GeoPoint;
    /**
     * @member {Image} [mapIcon]
     */
    mapIcon?: Image;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {OpeningSchedule} [openingHours]
     */
    openingHours?: OpeningSchedule;
    /**
     * @member {string} [storeContent]
     */
    storeContent?: string;
    /**
     * @member {Image[]} [storeImages]
     */
    storeImages?: Image[];
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing Category.
 */
export interface Category {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Image} [image]
     */
    image?: Image;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing FeatureUnit.
 */
export interface FeatureUnit {
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [symbol]
     */
    symbol?: string;
    /**
     * @member {string} [unitType]
     */
    unitType?: string;
}
/**
 * @interface
 * An interface representing FeatureValue.
 */
export interface FeatureValue {
    /**
     * @member {string} [value]
     */
    value?: string;
}
/**
 * @interface
 * An interface representing Feature.
 */
export interface Feature {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {boolean} [comparable]
     */
    comparable?: boolean;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {FeatureUnit} [featureUnit]
     */
    featureUnit?: FeatureUnit;
    /**
     * @member {FeatureValue[]} [featureValues]
     */
    featureValues?: FeatureValue[];
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {boolean} [range]
     */
    range?: boolean;
    /**
     * @member {string} [type]
     */
    type?: string;
}
/**
 * @interface
 * An interface representing Classification.
 */
export interface Classification {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Feature[]} [features]
     */
    features?: Feature[];
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing FutureStock.
 */
export interface FutureStock {
    /**
     * @member {Date} [date]
     */
    date?: Date;
    /**
     * @member {string} [formattedDate]
     */
    formattedDate?: string;
    /**
     * @member {Stock} [stock]
     */
    stock?: Stock;
}
/**
 * @interface
 * An interface representing PriceRange.
 */
export interface PriceRange {
    /**
     * @member {Price} [maxPrice]
     */
    maxPrice?: Price;
    /**
     * @member {Price} [minPrice]
     */
    minPrice?: Price;
}
/**
 * @interface
 * An interface representing ProductReference.
 */
export interface ProductReference {
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {boolean} [preselected]
     */
    preselected?: boolean;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {string} [referenceType]
     */
    referenceType?: string;
    /**
     * @member {Product} [target]
     */
    target?: Product;
}
/**
 * @interface
 * An interface representing Language.
 */
export interface Language {
    /**
     * @member {boolean} [active]
     */
    active?: boolean;
    /**
     * @member {string} [isocode]
     */
    isocode?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [nativeName]
     */
    nativeName?: string;
}
/**
 * @interface
 * An interface representing User.
 */
export interface User {
    /**
     * @member {Currency} [currency]
     */
    currency?: Currency;
    /**
     * @member {string} [customerId]
     */
    customerId?: string;
    /**
     * @member {Date} [deactivationDate]
     */
    deactivationDate?: Date;
    /**
     * @member {Address} [defaultAddress]
     */
    defaultAddress?: Address;
    /**
     * @member {string} [displayUid]
     */
    displayUid?: string;
    /**
     * @member {string} [firstName]
     */
    firstName?: string;
    /**
     * @member {Language} [language]
     */
    language?: Language;
    /**
     * @member {string} [lastName]
     */
    lastName?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [title]
     */
    title?: string;
    /**
     * @member {string} [titleCode]
     */
    titleCode?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing Review.
 */
export interface Review {
    /**
     * @member {string} [alias]
     */
    alias?: string;
    /**
     * @member {string} [comment]
     */
    comment?: string;
    /**
     * @member {Date} [date]
     */
    date?: Date;
    /**
     * @member {string} [headline]
     */
    headline?: string;
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {User} [principal]
     */
    principal?: User;
    /**
     * @member {number} [rating]
     */
    rating?: number;
}
/**
 * @interface
 * An interface representing VariantCategory.
 */
export interface VariantCategory {
    /**
     * @member {boolean} [hasImage]
     */
    hasImage?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [priority]
     */
    priority?: number;
}
/**
 * @interface
 * An interface representing VariantValueCategory.
 */
export interface VariantValueCategory {
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [sequence]
     */
    sequence?: number;
    /**
     * @member {VariantCategory[]} [superCategories]
     */
    superCategories?: VariantCategory[];
}
/**
 * @interface
 * An interface representing VariantMatrixElement.
 */
export interface VariantMatrixElement {
    /**
     * @member {VariantMatrixElement[]} [elements]
     */
    elements?: VariantMatrixElement[];
    /**
     * @member {boolean} [isLeaf]
     */
    isLeaf?: boolean;
    /**
     * @member {VariantCategory} [parentVariantCategory]
     */
    parentVariantCategory?: VariantCategory;
    /**
     * @member {VariantOption} [variantOption]
     */
    variantOption?: VariantOption;
    /**
     * @member {VariantValueCategory} [variantValueCategory]
     */
    variantValueCategory?: VariantValueCategory;
}
/**
 * @interface
 * An interface representing Product.
 */
export interface Product {
    /**
     * @member {boolean} [availableForPickup]
     */
    availableForPickup?: boolean;
    /**
     * @member {number} [averageRating]
     */
    averageRating?: number;
    /**
     * @member {BaseOption[]} [baseOptions]
     */
    baseOptions?: BaseOption[];
    /**
     * @member {string} [baseProduct]
     */
    baseProduct?: string;
    /**
     * @member {Category[]} [categories]
     */
    categories?: Category[];
    /**
     * @member {Classification[]} [classifications]
     */
    classifications?: Classification[];
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {FutureStock[]} [futureStocks]
     */
    futureStocks?: FutureStock[];
    /**
     * @member {Image[]} [images]
     */
    images?: Image[];
    /**
     * @member {string} [manufacturer]
     */
    manufacturer?: string;
    /**
     * @member {boolean} [multidimensional]
     */
    multidimensional?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [numberOfReviews]
     */
    numberOfReviews?: number;
    /**
     * @member {Promotion[]} [potentialPromotions]
     */
    potentialPromotions?: Promotion[];
    /**
     * @member {Price} [price]
     */
    price?: Price;
    /**
     * @member {PriceRange} [priceRange]
     */
    priceRange?: PriceRange;
    /**
     * @member {ProductReference[]} [productReferences]
     */
    productReferences?: ProductReference[];
    /**
     * @member {boolean} [purchasable]
     */
    purchasable?: boolean;
    /**
     * @member {Review[]} [reviews]
     */
    reviews?: Review[];
    /**
     * @member {Stock} [stock]
     */
    stock?: Stock;
    /**
     * @member {string} [summary]
     */
    summary?: string;
    /**
     * @member {string} [url]
     */
    url?: string;
    /**
     * @member {VariantMatrixElement[]} [variantMatrix]
     */
    variantMatrix?: VariantMatrixElement[];
    /**
     * @member {VariantOption[]} [variantOptions]
     */
    variantOptions?: VariantOption[];
    /**
     * @member {string} [variantType]
     */
    variantType?: string;
    /**
     * @member {Price[]} [volumePrices]
     */
    volumePrices?: Price[];
    /**
     * @member {boolean} [volumePricesFlag]
     */
    volumePricesFlag?: boolean;
}
/**
 * @interface
 * An interface representing OrderEntry.
 */
export interface OrderEntry {
    /**
     * @member {Price} [basePrice]
     */
    basePrice?: Price;
    /**
     * @member {DeliveryMode} [deliveryMode]
     */
    deliveryMode?: DeliveryMode;
    /**
     * @member {PointOfService} [deliveryPointOfService]
     */
    deliveryPointOfService?: PointOfService;
    /**
     * @member {number} [entryNumber]
     */
    entryNumber?: number;
    /**
     * @member {Product} [product]
     */
    product?: Product;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {Price} [totalPrice]
     */
    totalPrice?: Price;
    /**
     * @member {boolean} [updateable]
     */
    updateable?: boolean;
}
/**
 * @interface
 * An interface representing DeliveryOrderEntryGroup.
 */
export interface DeliveryOrderEntryGroup {
    /**
     * @member {Address} [deliveryAddress]
     */
    deliveryAddress?: Address;
    /**
     * @member {OrderEntry[]} [entries]
     */
    entries?: OrderEntry[];
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {Price} [totalPriceWithTax]
     */
    totalPriceWithTax?: Price;
}
/**
 * @interface
 * An interface representing PaymentDetails.
 */
export interface PaymentDetails {
    /**
     * @member {string} [accountHolderName]
     */
    accountHolderName?: string;
    /**
     * @member {Address} [billingAddress]
     */
    billingAddress?: Address;
    /**
     * @member {string} [cardNumber]
     */
    cardNumber?: string;
    /**
     * @member {CardType} [cardType]
     */
    cardType?: CardType;
    /**
     * @member {boolean} [defaultPayment]
     */
    defaultPayment?: boolean;
    /**
     * @member {string} [expiryMonth]
     */
    expiryMonth?: string;
    /**
     * @member {string} [expiryYear]
     */
    expiryYear?: string;
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {string} [issueNumber]
     */
    issueNumber?: string;
    /**
     * @member {boolean} [saved]
     */
    saved?: boolean;
    /**
     * @member {string} [startMonth]
     */
    startMonth?: string;
    /**
     * @member {string} [startYear]
     */
    startYear?: string;
    /**
     * @member {string} [subscriptionId]
     */
    subscriptionId?: string;
}
/**
 * @interface
 * An interface representing PickupOrderEntryGroup.
 */
export interface PickupOrderEntryGroup {
    /**
     * @member {PointOfService} [deliveryPointOfService]
     */
    deliveryPointOfService?: PointOfService;
    /**
     * @member {number} [distance]
     */
    distance?: number;
    /**
     * @member {OrderEntry[]} [entries]
     */
    entries?: OrderEntry[];
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {Price} [totalPriceWithTax]
     */
    totalPriceWithTax?: Price;
}
/**
 * @interface
 * An interface representing Principal.
 */
export interface Principal {
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing Cart.
 */
export interface Cart {
    /**
     * @member {PromotionResult[]} [appliedOrderPromotions]
     */
    appliedOrderPromotions?: PromotionResult[];
    /**
     * @member {PromotionResult[]} [appliedProductPromotions]
     */
    appliedProductPromotions?: PromotionResult[];
    /**
     * @member {Voucher[]} [appliedVouchers]
     */
    appliedVouchers?: Voucher[];
    /**
     * @member {boolean} [calculated]
     */
    calculated?: boolean;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Address} [deliveryAddress]
     */
    deliveryAddress?: Address;
    /**
     * @member {Price} [deliveryCost]
     */
    deliveryCost?: Price;
    /**
     * @member {number} [deliveryItemsQuantity]
     */
    deliveryItemsQuantity?: number;
    /**
     * @member {DeliveryMode} [deliveryMode]
     */
    deliveryMode?: DeliveryMode;
    /**
     * @member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
     */
    deliveryOrderGroups?: DeliveryOrderEntryGroup[];
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {OrderEntry[]} [entries]
     */
    entries?: OrderEntry[];
    /**
     * @member {Date} [expirationTime]
     */
    expirationTime?: Date;
    /**
     * @member {string} [guid]
     */
    guid?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {boolean} [net]
     */
    net?: boolean;
    /**
     * @member {Price} [orderDiscounts]
     */
    orderDiscounts?: Price;
    /**
     * @member {PaymentDetails} [paymentInfo]
     */
    paymentInfo?: PaymentDetails;
    /**
     * @member {number} [pickupItemsQuantity]
     */
    pickupItemsQuantity?: number;
    /**
     * @member {PickupOrderEntryGroup[]} [pickupOrderGroups]
     */
    pickupOrderGroups?: PickupOrderEntryGroup[];
    /**
     * @member {PromotionResult[]} [potentialOrderPromotions]
     */
    potentialOrderPromotions?: PromotionResult[];
    /**
     * @member {PromotionResult[]} [potentialProductPromotions]
     */
    potentialProductPromotions?: PromotionResult[];
    /**
     * @member {Price} [productDiscounts]
     */
    productDiscounts?: Price;
    /**
     * @member {Date} [saveTime]
     */
    saveTime?: Date;
    /**
     * @member {Principal} [savedBy]
     */
    savedBy?: Principal;
    /**
     * @member {string} [site]
     */
    site?: string;
    /**
     * @member {string} [store]
     */
    store?: string;
    /**
     * @member {Price} [subTotal]
     */
    subTotal?: Price;
    /**
     * @member {Price} [totalDiscounts]
     */
    totalDiscounts?: Price;
    /**
     * @member {number} [totalItems]
     */
    totalItems?: number;
    /**
     * @member {Price} [totalPrice]
     */
    totalPrice?: Price;
    /**
     * @member {Price} [totalPriceWithTax]
     */
    totalPriceWithTax?: Price;
    /**
     * @member {Price} [totalTax]
     */
    totalTax?: Price;
    /**
     * @member {number} [totalUnitCount]
     */
    totalUnitCount?: number;
    /**
     * @member {Principal} [user]
     */
    user?: Principal;
}
/**
 * @interface
 * An interface representing CartList.
 */
export interface CartList {
    /**
     * @member {Cart[]} [carts]
     */
    carts?: Cart[];
}
/**
 * @interface
 * An interface representing CartModification.
 */
export interface CartModification {
    /**
     * @member {boolean} [deliveryModeChanged]
     */
    deliveryModeChanged?: boolean;
    /**
     * @member {OrderEntry} [entry]
     */
    entry?: OrderEntry;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {number} [quantityAdded]
     */
    quantityAdded?: number;
    /**
     * @member {string} [statusCode]
     */
    statusCode?: string;
    /**
     * @member {string} [statusMessage]
     */
    statusMessage?: string;
}
/**
 * @interface
 * An interface representing CategoryHierarchy.
 */
export interface CategoryHierarchy {
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {Date} [lastModified]
     */
    lastModified?: Date;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {CategoryHierarchy[]} [subcategories]
     */
    subcategories?: CategoryHierarchy[];
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing CatalogVersion.
 */
export interface CatalogVersion {
    /**
     * @member {CategoryHierarchy[]} [categories]
     */
    categories?: CategoryHierarchy[];
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {Date} [lastModified]
     */
    lastModified?: Date;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing Catalog.
 */
export interface Catalog {
    /**
     * @member {CatalogVersion[]} [catalogVersions]
     */
    catalogVersions?: CatalogVersion[];
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {Date} [lastModified]
     */
    lastModified?: Date;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing CatalogList.
 */
export interface CatalogList {
    /**
     * @member {Catalog[]} [catalogs]
     */
    catalogs?: Catalog[];
}
/**
 * @interface
 * An interface representing ComponentIDList.
 */
export interface ComponentIDList {
    /**
     * @member {string[]} [idList]
     */
    idList?: string[];
}
/**
 * @interface
 * An interface representing ConsignmentEntry.
 */
export interface ConsignmentEntry {
    /**
     * @member {OrderEntry} [orderEntry]
     */
    orderEntry?: OrderEntry;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {number} [shippedQuantity]
     */
    shippedQuantity?: number;
}
/**
 * @interface
 * An interface representing Consignment.
 */
export interface Consignment {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {PointOfService} [deliveryPointOfService]
     */
    deliveryPointOfService?: PointOfService;
    /**
     * @member {ConsignmentEntry[]} [entries]
     */
    entries?: ConsignmentEntry[];
    /**
     * @member {Address} [shippingAddress]
     */
    shippingAddress?: Address;
    /**
     * @member {string} [status]
     */
    status?: string;
    /**
     * @member {Date} [statusDate]
     */
    statusDate?: Date;
    /**
     * @member {string} [trackingID]
     */
    trackingID?: string;
}
/**
 * @interface
 * An interface representing CountryList.
 */
export interface CountryList {
    /**
     * @member {Country[]} [countries]
     */
    countries?: Country[];
}
/**
 * @interface
 * An interface representing CurrencyList.
 */
export interface CurrencyList {
    /**
     * @member {Currency[]} [currencies]
     */
    currencies?: Currency[];
}
/**
 * @interface
 * An interface representing DeliveryModeList.
 */
export interface DeliveryModeList {
    /**
     * @member {DeliveryMode[]} [deliveryModes]
     */
    deliveryModes?: DeliveryMode[];
}
/**
 * @interface
 * An interface representing FacetValue.
 */
export interface FacetValue {
    /**
     * @member {number} [count]
     */
    count?: number;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {SearchState} [query]
     */
    query?: SearchState;
    /**
     * @member {boolean} [selected]
     */
    selected?: boolean;
}
/**
 * @interface
 * An interface representing Facet.
 */
export interface Facet {
    /**
     * @member {boolean} [category]
     */
    category?: boolean;
    /**
     * @member {boolean} [multiSelect]
     */
    multiSelect?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [priority]
     */
    priority?: number;
    /**
     * @member {FacetValue[]} [topValues]
     */
    topValues?: FacetValue[];
    /**
     * @member {FacetValue[]} [values]
     */
    values?: FacetValue[];
    /**
     * @member {boolean} [visible]
     */
    visible?: boolean;
}
/**
 * @interface
 * An interface representing LanguageList.
 */
export interface LanguageList {
    /**
     * @member {Language[]} [languages]
     */
    languages?: Language[];
}
/**
 * @interface
 * An interface representing Pagination.
 * Pagination info
 *
 */
export interface Pagination {
    /**
     * @member {number} [count] Number of elements on this page
     */
    count?: number;
    /**
     * @member {number} [page] Current page number
     */
    page?: number;
    /**
     * @member {number} [totalCount] Total number of elements
     */
    totalCount?: number;
    /**
     * @member {number} [totalPages] Total number of pages
     */
    totalPages?: number;
}
/**
 * @interface
 * An interface representing Sort.
 * Sort option
 *
 */
export interface Sort {
    /**
     * @member {boolean} [asc]
     */
    asc?: boolean;
    /**
     * @member {string} [code]
     */
    code?: string;
}
/**
 * @interface
 * An interface representing ListAdaptedComponents.
 */
export interface ListAdaptedComponents {
    /**
     * @member {any[]} [components]
     */
    components?: any[];
    /**
     * @member {Pagination} [pagination]
     */
    pagination?: Pagination;
    /**
     * @member {Sort[]} [sorts]
     */
    sorts?: Sort[];
}
/**
 * @interface
 * An interface representing MemberList.
 */
export interface MemberList {
    /**
     * @member {Principal[]} [members]
     */
    members?: Principal[];
}
/**
 * @interface
 * An interface representing OrderEntryList.
 */
export interface OrderEntryList {
    /**
     * @member {OrderEntry[]} [orderEntries]
     */
    orderEntries?: OrderEntry[];
}
/**
 * @interface
 * An interface representing OrderHistory.
 */
export interface OrderHistory {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [guid]
     */
    guid?: string;
    /**
     * @member {Date} [placed]
     */
    placed?: Date;
    /**
     * @member {string} [status]
     */
    status?: string;
    /**
     * @member {string} [statusDisplay]
     */
    statusDisplay?: string;
    /**
     * @member {Price} [total]
     */
    total?: Price;
}
/**
 * @interface
 * An interface representing PaginationModel.
 */
export interface PaginationModel {
    /**
     * @member {number} [currentPage]
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize]
     */
    pageSize?: number;
    /**
     * @member {string} [sort]
     */
    sort?: string;
    /**
     * @member {number} [totalPages]
     */
    totalPages?: number;
    /**
     * @member {number} [totalResults]
     */
    totalResults?: number;
}
/**
 * @interface
 * An interface representing SortModel.
 */
export interface SortModel {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {boolean} [selected]
     */
    selected?: boolean;
}
/**
 * @interface
 * An interface representing OrderHistoryList.
 */
export interface OrderHistoryList {
    /**
     * @member {OrderHistory[]} [orders]
     */
    orders?: OrderHistory[];
    /**
     * @member {PaginationModel} [pagination]
     */
    pagination?: PaginationModel;
    /**
     * @member {SortModel[]} [sorts]
     */
    sorts?: SortModel[];
}
/**
 * @interface
 * An interface representing OrderStatusUpdateElement.
 */
export interface OrderStatusUpdateElement {
    /**
     * @member {string} [baseSiteId]
     */
    baseSiteId?: string;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [status]
     */
    status?: string;
}
/**
 * @interface
 * An interface representing OrderStatusUpdateElementList.
 */
export interface OrderStatusUpdateElementList {
    /**
     * @member {OrderStatusUpdateElement[]} [orderStatusUpdateElements]
     */
    orderStatusUpdateElements?: OrderStatusUpdateElement[];
}
/**
 * @interface
 * An interface representing Order.
 */
export interface Order {
    /**
     * @member {PromotionResult[]} [appliedOrderPromotions]
     */
    appliedOrderPromotions?: PromotionResult[];
    /**
     * @member {PromotionResult[]} [appliedProductPromotions]
     */
    appliedProductPromotions?: PromotionResult[];
    /**
     * @member {Voucher[]} [appliedVouchers]
     */
    appliedVouchers?: Voucher[];
    /**
     * @member {boolean} [calculated]
     */
    calculated?: boolean;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Consignment[]} [consignments]
     */
    consignments?: Consignment[];
    /**
     * @member {Date} [created]
     */
    created?: Date;
    /**
     * @member {Address} [deliveryAddress]
     */
    deliveryAddress?: Address;
    /**
     * @member {Price} [deliveryCost]
     */
    deliveryCost?: Price;
    /**
     * @member {number} [deliveryItemsQuantity]
     */
    deliveryItemsQuantity?: number;
    /**
     * @member {DeliveryMode} [deliveryMode]
     */
    deliveryMode?: DeliveryMode;
    /**
     * @member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
     */
    deliveryOrderGroups?: DeliveryOrderEntryGroup[];
    /**
     * @member {string} [deliveryStatus]
     */
    deliveryStatus?: string;
    /**
     * @member {string} [deliveryStatusDisplay]
     */
    deliveryStatusDisplay?: string;
    /**
     * @member {OrderEntry[]} [entries]
     */
    entries?: OrderEntry[];
    /**
     * @member {boolean} [guestCustomer]
     */
    guestCustomer?: boolean;
    /**
     * @member {string} [guid]
     */
    guid?: string;
    /**
     * @member {boolean} [net]
     */
    net?: boolean;
    /**
     * @member {Price} [orderDiscounts]
     */
    orderDiscounts?: Price;
    /**
     * @member {PaymentDetails} [paymentInfo]
     */
    paymentInfo?: PaymentDetails;
    /**
     * @member {number} [pickupItemsQuantity]
     */
    pickupItemsQuantity?: number;
    /**
     * @member {PickupOrderEntryGroup[]} [pickupOrderGroups]
     */
    pickupOrderGroups?: PickupOrderEntryGroup[];
    /**
     * @member {Price} [productDiscounts]
     */
    productDiscounts?: Price;
    /**
     * @member {string} [site]
     */
    site?: string;
    /**
     * @member {string} [status]
     */
    status?: string;
    /**
     * @member {string} [statusDisplay]
     */
    statusDisplay?: string;
    /**
     * @member {string} [store]
     */
    store?: string;
    /**
     * @member {Price} [subTotal]
     */
    subTotal?: Price;
    /**
     * @member {Price} [totalDiscounts]
     */
    totalDiscounts?: Price;
    /**
     * @member {number} [totalItems]
     */
    totalItems?: number;
    /**
     * @member {Price} [totalPrice]
     */
    totalPrice?: Price;
    /**
     * @member {Price} [totalPriceWithTax]
     */
    totalPriceWithTax?: Price;
    /**
     * @member {Price} [totalTax]
     */
    totalTax?: Price;
    /**
     * @member {OrderEntry[]} [unconsignedEntries]
     */
    unconsignedEntries?: OrderEntry[];
    /**
     * @member {Principal} [user]
     */
    user?: Principal;
}
/**
 * @interface
 * An interface representing PaymentDetailsList.
 */
export interface PaymentDetailsList {
    /**
     * @member {PaymentDetails[]} [payments]
     */
    payments?: PaymentDetails[];
}
/**
 * @interface
 * An interface representing PointOfServiceStock.
 */
export interface PointOfServiceStock {
    /**
     * @member {Address} [address]
     */
    address?: Address;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [displayName]
     */
    displayName?: string;
    /**
     * @member {number} [distanceKm]
     */
    distanceKm?: number;
    /**
     * @member {{ [propertyName: string]: string }} [features]
     */
    features?: {
        [propertyName: string]: string;
    };
    /**
     * @member {string} [formattedDistance]
     */
    formattedDistance?: string;
    /**
     * @member {GeoPoint} [geoPoint]
     */
    geoPoint?: GeoPoint;
    /**
     * @member {Image} [mapIcon]
     */
    mapIcon?: Image;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {OpeningSchedule} [openingHours]
     */
    openingHours?: OpeningSchedule;
    /**
     * @member {Stock} [stockInfo]
     */
    stockInfo?: Stock;
    /**
     * @member {string} [storeContent]
     */
    storeContent?: string;
    /**
     * @member {Image[]} [storeImages]
     */
    storeImages?: Image[];
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing ProductExpressUpdateElement.
 */
export interface ProductExpressUpdateElement {
    /**
     * @member {string} [catalogId]
     */
    catalogId?: string;
    /**
     * @member {string} [catalogVersion]
     */
    catalogVersion?: string;
    /**
     * @member {string} [code]
     */
    code?: string;
}
/**
 * @interface
 * An interface representing ProductExpressUpdateElementList.
 */
export interface ProductExpressUpdateElementList {
    /**
     * @member {ProductExpressUpdateElement[]} [productExpressUpdateElements]
     */
    productExpressUpdateElements?: ProductExpressUpdateElement[];
}
/**
 * @interface
 * An interface representing ProductList.
 */
export interface ProductList {
    /**
     * @member {string} [catalog]
     */
    catalog?: string;
    /**
     * @member {number} [currentPage]
     */
    currentPage?: number;
    /**
     * @member {Product[]} [products]
     */
    products?: Product[];
    /**
     * @member {number} [totalPageCount]
     */
    totalPageCount?: number;
    /**
     * @member {number} [totalProductCount]
     */
    totalProductCount?: number;
    /**
     * @member {string} [version]
     */
    version?: string;
}
/**
 * @interface
 * An interface representing ProductReferenceList.
 */
export interface ProductReferenceList {
    /**
     * @member {ProductReference[]} [references]
     */
    references?: ProductReference[];
}
/**
 * @interface
 * An interface representing SpellingSuggestion.
 */
export interface SpellingSuggestion {
    /**
     * @member {string} [query]
     */
    query?: string;
    /**
     * @member {string} [suggestion]
     */
    suggestion?: string;
}
/**
 * @interface
 * An interface representing ProductSearchPage.
 */
export interface ProductSearchPage {
    /**
     * @member {Breadcrumb[]} [breadcrumbs]
     */
    breadcrumbs?: Breadcrumb[];
    /**
     * @member {string} [categoryCode]
     */
    categoryCode?: string;
    /**
     * @member {SearchState} [currentQuery]
     */
    currentQuery?: SearchState;
    /**
     * @member {Facet[]} [facets]
     */
    facets?: Facet[];
    /**
     * @member {string} [freeTextSearch]
     */
    freeTextSearch?: string;
    /**
     * @member {string} [keywordRedirectUrl]
     */
    keywordRedirectUrl?: string;
    /**
     * @member {PaginationModel} [pagination]
     */
    pagination?: PaginationModel;
    /**
     * @member {Product[]} [products]
     */
    products?: Product[];
    /**
     * @member {SortModel[]} [sorts]
     */
    sorts?: SortModel[];
    /**
     * @member {SpellingSuggestion} [spellingSuggestion]
     */
    spellingSuggestion?: SpellingSuggestion;
}
/**
 * @interface
 * An interface representing PromotionList.
 */
export interface PromotionList {
    /**
     * @member {Promotion[]} [promotions]
     */
    promotions?: Promotion[];
}
/**
 * @interface
 * An interface representing PromotionResultList.
 */
export interface PromotionResultList {
    /**
     * @member {PromotionResult[]} [promotions]
     */
    promotions?: PromotionResult[];
}
/**
 * @interface
 * An interface representing ReviewList.
 */
export interface ReviewList {
    /**
     * @member {Review[]} [reviews]
     */
    reviews?: Review[];
}
/**
 * @interface
 * An interface representing SaveCartResult.
 */
export interface SaveCartResult {
    /**
     * @member {Cart} [savedCartData]
     */
    savedCartData?: Cart;
}
/**
 * @interface
 * An interface representing StoreFinderSearchPage.
 */
export interface StoreFinderSearchPage {
    /**
     * @member {number} [boundEastLongitude]
     */
    boundEastLongitude?: number;
    /**
     * @member {number} [boundNorthLatitude]
     */
    boundNorthLatitude?: number;
    /**
     * @member {number} [boundSouthLatitude]
     */
    boundSouthLatitude?: number;
    /**
     * @member {number} [boundWestLongitude]
     */
    boundWestLongitude?: number;
    /**
     * @member {string} [locationText]
     */
    locationText?: string;
    /**
     * @member {PaginationModel} [pagination]
     */
    pagination?: PaginationModel;
    /**
     * @member {SortModel[]} [sorts]
     */
    sorts?: SortModel[];
    /**
     * @member {number} [sourceLatitude]
     */
    sourceLatitude?: number;
    /**
     * @member {number} [sourceLongitude]
     */
    sourceLongitude?: number;
    /**
     * @member {PointOfService[]} [stores]
     */
    stores?: PointOfService[];
}
/**
 * @interface
 * An interface representing StoreFinderStockSearchPage.
 */
export interface StoreFinderStockSearchPage {
    /**
     * @member {number} [boundEastLongitude]
     */
    boundEastLongitude?: number;
    /**
     * @member {number} [boundNorthLatitude]
     */
    boundNorthLatitude?: number;
    /**
     * @member {number} [boundSouthLatitude]
     */
    boundSouthLatitude?: number;
    /**
     * @member {number} [boundWestLongitude]
     */
    boundWestLongitude?: number;
    /**
     * @member {string} [locationText]
     */
    locationText?: string;
    /**
     * @member {PaginationModel} [pagination]
     */
    pagination?: PaginationModel;
    /**
     * @member {Product} [product]
     */
    product?: Product;
    /**
     * @member {SortModel[]} [sorts]
     */
    sorts?: SortModel[];
    /**
     * @member {number} [sourceLatitude]
     */
    sourceLatitude?: number;
    /**
     * @member {number} [sourceLongitude]
     */
    sourceLongitude?: number;
    /**
     * @member {PointOfServiceStock[]} [stores]
     */
    stores?: PointOfServiceStock[];
}
/**
 * @interface
 * An interface representing Suggestion.
 */
export interface Suggestion {
    /**
     * @member {string} [value]
     */
    value?: string;
}
/**
 * @interface
 * An interface representing SuggestionList.
 */
export interface SuggestionList {
    /**
     * @member {Suggestion[]} [suggestions]
     */
    suggestions?: Suggestion[];
}
/**
 * @interface
 * An interface representing Title.
 */
export interface Title {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing TitleList.
 */
export interface TitleList {
    /**
     * @member {Title[]} [titles]
     */
    titles?: Title[];
}
/**
 * @interface
 * An interface representing UserGroup.
 */
export interface UserGroup {
    /**
     * @member {Principal[]} [members]
     */
    members?: Principal[];
    /**
     * @member {number} [membersCount]
     */
    membersCount?: number;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {UserGroup[]} [subGroups]
     */
    subGroups?: UserGroup[];
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing UserGroupList.
 */
export interface UserGroupList {
    /**
     * @member {number} [currentPage]
     */
    currentPage?: number;
    /**
     * @member {number} [numberOfPages]
     */
    numberOfPages?: number;
    /**
     * @member {number} [pageSize]
     */
    pageSize?: number;
    /**
     * @member {number} [totalNumber]
     */
    totalNumber?: number;
    /**
     * @member {UserGroup[]} [userGroups]
     */
    userGroups?: UserGroup[];
}
/**
 * @interface
 * An interface representing UserSignUp.
 */
export interface UserSignUp {
    /**
     * @member {string} [firstName]
     */
    firstName?: string;
    /**
     * @member {string} [lastName]
     */
    lastName?: string;
    /**
     * @member {string} [password]
     */
    password?: string;
    /**
     * @member {string} [titleCode]
     */
    titleCode?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing VoucherList.
 */
export interface VoucherList {
    /**
     * @member {Voucher[]} [vouchers]
     */
    vouchers?: Voucher[];
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCardTypesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCardTypesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCatalogsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCatalogsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields1} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields1;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCatalogOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCatalogOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields2} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields2;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCatalogVersionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCatalogVersionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields3} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields3;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCategoriesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCategoriesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields4} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields4;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetComponentByIdListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetComponentByIdListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [catalogCode] Catalog code
     */
    catalogCode?: string;
    /**
     * @member {string} [productCode] Product code
     */
    productCode?: string;
    /**
     * @member {string} [categoryCode] Category code
     */
    categoryCode?: string;
    /**
     * @member {Fields5} [fields] Response configuration (list of fields, which
     * should be returned in response). Possible values include: 'BASIC',
     * 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields5;
    /**
     * @member {number} [currentPage] Optional pagination parameter. Default
     * value 0. Default value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] Optional pagination parameter. Default value
     * 10. Default value: 10 .
     */
    pageSize?: number;
    /**
     * @member {string} [sort] Optional sort criterion. No default value.
     */
    sort?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetComponentByIdOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetComponentByIdOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [catalogCode] Catalog code
     */
    catalogCode?: string;
    /**
     * @member {string} [productCode] Product code
     */
    productCode?: string;
    /**
     * @member {string} [categoryCode] Category code
     */
    categoryCode?: string;
    /**
     * @member {Fields6} [fields] Response configuration (list of fields, which
     * should be returned in response). Possible values include: 'BASIC',
     * 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields6;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPageDataOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPageDataOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PageType} [pageType] page type. Possible values include:
     * 'ContentPage', 'ProductPage', 'CategoryPage', 'CatalogPage'. Default
     * value: 'ContentPage' .
     */
    pageType?: PageType;
    /**
     * @member {string} [pageLabelOrId] Page Label or Id
     */
    pageLabelOrId?: string;
    /**
     * @member {string} [code] If pageType is ProductPage, code should be product
     * code; if pageType is CategoryPage, code should be category code; if
     * pageType is CatalogPage, code should be catalog code
     */
    code?: string;
    /**
     * @member {Fields7} [fields] Response configuration (list of fields, which
     * should be returned in response). Possible values include: 'BASIC',
     * 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields7;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCurrenciesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCurrenciesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields8} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields8;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetAllCustomerGroupsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetAllCustomerGroupsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [currentPage] Current page number (starts with 0).
     * Default value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] Number of customer group returned in one page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {Fields9} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields9;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCustomerGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCustomerGroupOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields10} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields10;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetDeliveryCountriesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetDeliveryCountriesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields11} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields11;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2ExportProductsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2ExportProductsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields12} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields12;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {string} [catalog] The catalog to retrieve products from. The
     * catalog must be provided along with the version.
     */
    catalog?: string;
    /**
     * @member {string} [version] The catalog version. The catalog version must
     * be provided along with the catalog.
     */
    version?: string;
    /**
     * @member {string} [timestamp] When this parameter is set, only products
     * modified after the given time will be returned. This parameter should be
     * in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
     */
    timestamp?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2OrderStatusFeedOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2OrderStatusFeedOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields13} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields13;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetLanguagesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetLanguagesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields14} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields14;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetOrderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetOrderOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields15} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields15;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2ExpressUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2ExpressUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [catalog] Only products from this catalog are returned.
     * Format: catalogId:catalogVersion
     */
    catalog?: string;
    /**
     * @member {Fields16} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields16;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2SearchProductsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2SearchProductsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [query] Serialized query, free text search, facets. The
     * format of a serialized query:
     * freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
     */
    query?: string;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {SortEnum} [sort] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'
     */
    sort?: SortEnum;
    /**
     * @member {string} [fields] The context to be used in the search query.
     * Default value: 'DEFAULT' .
     */
    fields?: string;
    /**
     * @member {string} [searchQueryContext] searchQueryContext
     */
    searchQueryContext?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CountSearchProductsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CountSearchProductsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [query] Serialized query, free text search, facets. The
     * format of a serialized query:
     * freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
     */
    query?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetSuggestionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetSuggestionsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields17} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields17;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetProductByCodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetProductByCodeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields18} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields18;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2ExportProductReferencesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2ExportProductReferencesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [pageSize] Maximum size of returned results. Default
     * value: 2147483647 .
     */
    pageSize?: number;
    /**
     * @member {Fields19} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields19;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetProductReviewsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetProductReviewsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [maxCount] Maximum count of reviews
     */
    maxCount?: number;
    /**
     * @member {Fields20} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields20;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateReviewPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateReviewPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields21} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields21;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2SearchProductStockByLocationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2SearchProductStockByLocationOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [location] Free-text location
     */
    location?: string;
    /**
     * @member {number} [latitude] Latitude location parameter.
     */
    latitude?: number;
    /**
     * @member {number} [longitude] Longitude location parameter.
     */
    longitude?: number;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {Fields22} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields22;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CountSearchProductStockByLocationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CountSearchProductStockByLocationOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [location] Free-text location
     */
    location?: string;
    /**
     * @member {number} [latitude] Latitude location parameter.
     */
    latitude?: number;
    /**
     * @member {number} [longitude] Longitude location parameter.
     */
    longitude?: number;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetStockDataOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetStockDataOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields23} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields23;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPromotionsPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPromotionsPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [promotionGroup] Only promotions from this group are
     * returned
     */
    promotionGroup?: string;
    /**
     * @member {Fields24} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields24;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPromotionByCodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPromotionByCodeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields25} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields25;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2LocationSearchOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2LocationSearchOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [query] Location in natural language i.e. city or
     * country.
     */
    query?: string;
    /**
     * @member {number} [latitude] Coordinate that specifies the north-south
     * position of a point on the Earth's surface.
     */
    latitude?: number;
    /**
     * @member {number} [longitude] Coordinate that specifies the east-west
     * position of a point on the Earth's surface.
     */
    longitude?: number;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {string} [sort] Sorting method applied to the return results.
     * Default value: 'asc' .
     */
    sort?: string;
    /**
     * @member {number} [radius] Radius in meters. Max value: 40075000.0 (Earth's
     * perimeter). Default value: 100000 .
     */
    radius?: number;
    /**
     * @member {number} [accuracy] Accuracy in meters. Default value: 0 .
     */
    accuracy?: number;
    /**
     * @member {Fields26} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields26;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CountLocationSearchOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CountLocationSearchOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [query] Location in natural language i.e. city or
     * country.
     */
    query?: string;
    /**
     * @member {number} [latitude] Coordinate that specifies the north-south
     * position of a point on the Earth's surface.
     */
    latitude?: number;
    /**
     * @member {number} [longitude] Coordinate that specifies the east-west
     * position of a point on the Earth's surface.
     */
    longitude?: number;
    /**
     * @member {number} [radius] Radius in meters. Max value: 40075000.0 (Earth's
     * perimeter). Default value: 100000 .
     */
    radius?: number;
    /**
     * @member {number} [accuracy] Accuracy in meters. Default value: 0 .
     */
    accuracy?: number;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2LocationDetailsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2LocationDetailsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields27} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields27;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetTitlesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetTitlesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields28} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields28;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2RegisterUserPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2RegisterUserPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields29} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields29;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetUserOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields30} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields30;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetAddressesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetAddressesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields31} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields31;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateAddressPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateAddressPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields32} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields32;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2VerifyAddressPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2VerifyAddressPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields33} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields33;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetAddressOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetAddressOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields34} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields34;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields35} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields35;
    /**
     * @member {boolean} [savedCartsOnly] Optional parameter. If the parameter is
     * provided and its value is true, only saved carts are returned. Default
     * value: false .
     */
    savedCartsOnly?: boolean;
    /**
     * @member {number} [currentPage] Optional pagination parameter in case of
     * savedCartsOnly == true. Default value 0. Default value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] Optional {@link PaginationData} parameter in
     * case of savedCartsOnly == true. Default value 20. Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {string} [sort] Optional sort criterion in case of savedCartsOnly
     * == true. No default value.
     */
    sort?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [oldCartId] Anonymous cart GUID.
     */
    oldCartId?: string;
    /**
     * @member {string} [toMergeCartGuid] The GUID of the user's cart that will
     * be merged with the anonymous cart.
     */
    toMergeCartGuid?: string;
    /**
     * @member {Fields36} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields36;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields37} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields37;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateAndSetAddressPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateAndSetAddressPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields38} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields38;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CloneSaveCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CloneSaveCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [name] The name that should be applied to the cloned
     * cart.
     */
    name?: string;
    /**
     * @member {string} [description] The description that should be applied to
     * the cloned cart.
     */
    description?: string;
    /**
     * @member {Fields39} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields39;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartDeliveryModeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartDeliveryModeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields40} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields40;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetSupportedDeliveryModesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetSupportedDeliveryModesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields41} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields41;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartEntriesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartEntriesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields42} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields42;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2AddCartEntryPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2AddCartEntryPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields43} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields43;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartEntryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartEntryOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields44} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields44;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2SetCartEntryPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2SetCartEntryPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields45} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields45;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2UpdateCartEntryPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2UpdateCartEntryPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields46} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields46;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2FlagForDeletionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2FlagForDeletionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields47} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields47;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2AddPaymentDetailsPrimOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2AddPaymentDetailsPrimOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields48} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields48;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPromotionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPromotionsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields49} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields49;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPromotionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPromotionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields50} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields50;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2RestoreSavedCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2RestoreSavedCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields51} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields51;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2SaveCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2SaveCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [saveCartName] The name that should be applied to the
     * saved cart.
     */
    saveCartName?: string;
    /**
     * @member {string} [saveCartDescription] The description that should be
     * applied to the saved cart.
     */
    saveCartDescription?: string;
    /**
     * @member {Fields52} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields52;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetSavedCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetSavedCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields53} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields53;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetVouchersOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetVouchersOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields54} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields54;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetAllCustomerGroupsForCustomerOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetAllCustomerGroupsForCustomerOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields55} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields55;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetOrdersForUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetOrdersForUserOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [statuses] Filters only certain order statuses. For
     * example, statuses=CANCELLED,CHECKED_VALID would only return orders with
     * status CANCELLED or CHECKED_VALID.
     */
    statuses?: string;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {string} [sort] Sorting method applied to the return results.
     */
    sort?: string;
    /**
     * @member {Fields56} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields56;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCountOrdersForUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCountOrdersForUserOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [statuses] Filters only certain order statuses. For
     * example, statuses=CANCELLED,CHECKED_VALID would only return orders with
     * status CANCELLED or CHECKED_VALID.
     */
    statuses?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2PlaceOrderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2PlaceOrderOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [securityCode] CCV security code.
     */
    securityCode?: string;
    /**
     * @member {Fields57} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields57;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetOrderForUserByCodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetOrderForUserByCodeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields58} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields58;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2ChangePasswordOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2ChangePasswordOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [old] Old password. Required only for ROLE_CUSTOMERGROUP
     */
    old?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPaymentInfosOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPaymentInfosOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields59} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields59;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPaymentDetailsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPaymentDetailsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields60} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields60;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetVoucherByCodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetVoucherByCodeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields61} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields61;
}
/**
 * Defines values for PriceType.
 * Possible values include: 'BUY', 'FROM'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: PriceType = <PriceType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum PriceType {
    BUY = "BUY",
    FROM = "FROM"
}
/**
 * Defines values for ImageType.
 * Possible values include: 'PRIMARY', 'GALLERY'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ImageType = <ImageType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum ImageType {
    PRIMARY = "PRIMARY",
    GALLERY = "GALLERY"
}
/**
 * Defines values for Fields.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields = <Fields>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields1.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields1 = <Fields1>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields1 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields2.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields2 = <Fields2>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields2 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields3.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields3 = <Fields3>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields3 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields4.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields4 = <Fields4>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields4 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields5.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields5 = <Fields5>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields5 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields6.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields6 = <Fields6>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields6 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for PageType.
 * Possible values include: 'ContentPage', 'ProductPage', 'CategoryPage',
 * 'CatalogPage'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: PageType = <PageType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum PageType {
    ContentPage = "ContentPage",
    ProductPage = "ProductPage",
    CategoryPage = "CategoryPage",
    CatalogPage = "CatalogPage"
}
/**
 * Defines values for Fields7.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields7 = <Fields7>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields7 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields8.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields8 = <Fields8>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields8 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields9.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields9 = <Fields9>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields9 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields10.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields10 = <Fields10>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields10 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields11.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields11 = <Fields11>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields11 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields12.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields12 = <Fields12>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields12 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields13.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields13 = <Fields13>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields13 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields14.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields14 = <Fields14>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields14 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields15.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields15 = <Fields15>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields15 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields16.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields16 = <Fields16>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields16 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for SortEnum.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SortEnum = <SortEnum>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum SortEnum {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields17.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields17 = <Fields17>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields17 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields18.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields18 = <Fields18>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields18 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields19.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields19 = <Fields19>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields19 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields20.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields20 = <Fields20>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields20 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields21.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields21 = <Fields21>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields21 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields22.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields22 = <Fields22>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields22 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields23.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields23 = <Fields23>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields23 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields24.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields24 = <Fields24>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields24 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields25.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields25 = <Fields25>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields25 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields26.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields26 = <Fields26>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields26 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields27.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields27 = <Fields27>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields27 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields28.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields28 = <Fields28>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields28 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields29.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields29 = <Fields29>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields29 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields30.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields30 = <Fields30>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields30 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields31.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields31 = <Fields31>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields31 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields32.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields32 = <Fields32>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields32 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields33.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields33 = <Fields33>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields33 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields34.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields34 = <Fields34>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields34 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields35.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields35 = <Fields35>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields35 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields36.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields36 = <Fields36>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields36 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields37.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields37 = <Fields37>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields37 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields38.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields38 = <Fields38>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields38 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields39.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields39 = <Fields39>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields39 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields40.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields40 = <Fields40>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields40 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields41.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields41 = <Fields41>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields41 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields42.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields42 = <Fields42>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields42 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields43.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields43 = <Fields43>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields43 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields44.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields44 = <Fields44>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields44 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields45.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields45 = <Fields45>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields45 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields46.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields46 = <Fields46>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields46 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields47.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields47 = <Fields47>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields47 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields48.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields48 = <Fields48>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields48 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields49.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields49 = <Fields49>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields49 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields50.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields50 = <Fields50>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields50 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields51.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields51 = <Fields51>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields51 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields52.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields52 = <Fields52>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields52 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields53.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields53 = <Fields53>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields53 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields54.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields54 = <Fields54>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields54 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields55.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields55 = <Fields55>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields55 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields56.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields56 = <Fields56>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields56 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields57.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields57 = <Fields57>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields57 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields58.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields58 = <Fields58>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields58 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields59.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields59 = <Fields59>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields59 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields60.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields60 = <Fields60>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields60 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Fields61.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Fields61 = <Fields61>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Fields61 {
    BASIC = "BASIC",
    DEFAULT = "DEFAULT",
    FULL = "FULL"
}
/**
 * Defines values for Type.
 * Possible values include: 'all', 'product', 'order'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Type = <Type>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum Type {
    All = "all",
    Product = "product",
    Order = "order"
}
