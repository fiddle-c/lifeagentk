interface Window {
  Calendly: {
    initPopupWidget: (options: {
      url: string;
      prefill?: Record<string, any>;
      utm?: Record<string, any>;
    }) => void;
    closePopupWidget: () => void;
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement;
      prefill?: Record<string, any>;
      utm?: Record<string, any>;
    }) => void;
  };
}
