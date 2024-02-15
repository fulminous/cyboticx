export declare type DeviceType = 'mobile' | 'tablet' | 'desktop';
export interface DeviceInfo {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    type: DeviceType;
}
