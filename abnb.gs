function getSpreadsheetConfig() {
  return {
    name: 'abnb—',
    id: '1XLH1PWZcehjUo1_DjnzeRQUbB8Z0JLryD_vu6gNNOPw'
  };
}

function getValuesSheetConfig() {
  return {
    name: 'Values',
    range: 'B5:C9',
    usersColumnIndex: 0,
    eventsCalendarIdRowIndex: 0,
    eventsCalendarIdColumnIndex: 1
  };
}

function getFeatureSheetConfigs() {
  return [
    this.getRemoteConfig(),
    this.getOnsiteConfig(),
    this.getServiceConfig(),
    this.getSeasonalConfig()
  ];
}

function getRemoteConfig() {
  const sections = ['titles', 'titlesAboveBelow', 'headers', 'main', 'underMain', 'rowsOutside', 'columnsOutside'];

  return {
    name: 'Remote',
    features: {
      orderSheetSections: {
        events: [Event.onOvernightTimer],
        sections: SectionsCategory.MAIN,
        order: [
          { column: 'O', direction: 'ascending' },
          { column: 'K', direction: 'ascending' },
          { column: 'I', direction: 'ascending' },
          { column: 'B', direction: 'ascending' },
          { column: 'C', direction: 'ascending' },
          { column: 'D', direction: 'ascending' }
        ]
      }
    },
    sidebar: {
      heading: {
        type: 'heading',
        title: 'Remote'
      },
      arrange: {
        type: 'buttons',
        title: 'Arrange by',
        options: ['Next Due', 'Assignee', 'Locale', 'Schedule'],
        features: {
          orderSheetSections: {
            events: [Event.onSidebarSubmit],
            sections: SectionsCategory.MAIN,
            priority: 'HIGH_PRIORITY',
            by: {
              nextDue: [
                { column: 'O', direction: 'ascending' },
                { column: 'K', direction: 'ascending' },
                { column: 'I', direction: 'ascending' },
                { column: 'B', direction: 'ascending' },
                { column: 'C', direction: 'ascending' },
                { column: 'D', direction: 'ascending' }
              ],
              assignee: [
                { column: 'C', direction: 'ascending' },
                { column: 'O', direction: 'ascending' },
                { column: 'K', direction: 'ascending' },
                { column: 'I', direction: 'ascending' },
                { column: 'B', direction: 'ascending' },
                { column: 'D', direction: 'ascending' }
              ],
              locale: [
                { column: 'B', direction: 'ascending' },
                { column: 'C', direction: 'ascending' },
                { column: 'D', direction: 'ascending' }
              ],
              schedule: [
                { column: 'M', direction: 'ascending' },
                { column: 'B', direction: 'ascending' },
                { column: 'C', direction: 'ascending' },
                { column: 'D', direction: 'ascending' }
              ]
            }
          }
        }
      }
    }
  };
}

function getOnsiteConfig() {
  let config = this.getRemoteConfig();
  config.name = 'Onsite';
  config.sidebar.heading.title = 'Onsite';
  return config;
}

function getServiceConfig() {
  let config = this.getRemoteConfig();
  config.name = 'Service';
  config.sidebar.heading.title = 'Service';
  return config;
}

function getSeasonalConfig() {
  let config = this.getRemoteConfig();
  config.name = 'Seasonal';
  config.sidebar.heading.title = 'Seasonal';
  return config;
}