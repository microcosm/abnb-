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
    this.getRemoteMaintenanceConfig(),
    this.getOnsiteMaintenanceConfig()
  ];
}

function getOnsiteMaintenanceConfig() {
  let config = this.getRemoteMaintenanceConfig();
  config.name = 'Onsite Maintenance';
  config.sidebar.heading.title = 'Onsite Maintenance';
  return config;
}

function getRemoteMaintenanceConfig() {
  const sections = ['titles', 'titlesAboveBelow', 'headers', 'main', 'underMain', 'rowsOutside', 'columnsOutside'];

  return {
    name: 'Remote Maintenance',
    features: {
      orderSheetSections: {
        events: [Event.onOvernightTimer],
        sections: SectionsCategory.MAIN,
        order: [
          { column: 'M', direction: 'ascending' },
          { column: 'I', direction: 'ascending' },
          { column: 'H', direction: 'ascending' },
          { column: 'B', direction: 'ascending' },
          { column: 'C', direction: 'ascending' }
        ]
      }
    },
    sidebar: {
      heading: {
        type: 'heading',
        title: 'Remote Maintenance'
      },
      arrange: {
        type: 'buttons',
        title: 'Arrange by',
        options: ['Next Due', 'Locale', 'Schedule'],
        features: {
          orderSheetSections: {
            events: [Event.onSidebarSubmit],
            sections: SectionsCategory.MAIN,
            priority: 'HIGH_PRIORITY',
            by: {
              nextDue: [
                { column: 'M', direction: 'ascending' },
                { column: 'I', direction: 'ascending' },
                { column: 'H', direction: 'ascending' },
                { column: 'B', direction: 'ascending' },
                { column: 'C', direction: 'ascending' }
              ],
              locale: [
                { column: 'B', direction: 'ascending' },
                { column: 'C', direction: 'ascending' }
              ],
              schedule: [
                { column: 'K', direction: 'ascending' },
                { column: 'B', direction: 'ascending' },
                { column: 'C', direction: 'ascending' }
              ]
            }
          }
        }
      }
    }
  };
}