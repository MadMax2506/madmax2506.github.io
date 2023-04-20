export type TimelineItem = {
  /**
   * Icon for the timeline item
   */
  icon: () => JSX.Element;
  /**
   * External link to describe the timeline item
   */
  href?: string;
} & TimelineItemTitle &
  TimelineItemSubtitle &
  TimelineItemDescription;

export type TimelineItemTitle =
  | {
      /**
       * Title text key for the timeline item
       */
      titleTextKey: string;
      title?: never;
    }
  | {
      titleTextKey?: never;
      /**
       * Title component the timeline item
       */
      title: () => JSX.Element;
    };

export type TimelineItemSubtitle =
  | {
      /**
       * Subtitle text key for the timeline item
       */
      subtitleTextKey?: string;
      subtitle?: never;
    }
  | {
      /**
       * Subtitle component for the timeline item
       */
      subtitleTextKey?: never;
      subtitle?: () => JSX.Element;
    };

export type TimelineItemDescription =
  | {
      /**
       * Description text key for the timeline item
       */
      descriptionTextKey?: string;
      description?: never;
    }
  | {
      descriptionTextKey?: never;
      /**
       * Description component for the timeline item
       */
      description?: () => JSX.Element;
    };
