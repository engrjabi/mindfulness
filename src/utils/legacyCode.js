/* eslint-disable */

async function startLegacyCode() {
  // Main.js
  (function($) {
    $(document).ready(function() {
      // World Map
      $("#world-map").vectorMap({
        map: "world_mill_en",
        backgroundColor: "transparent",
        markerStyle: {
          initial: {
            fill: "#2e2e2e",
            stroke: "#2e2e2e",
            "fill-opacity": 1,
            "stroke-width": 15,
            "stroke-opacity": 0.2
          }
        },
        markers: [
          {
            latLng: [37.18, -93.35],
            name: "United States"
          },
          {
            latLng: [20.59, 78.96],
            name: "India"
          },
          {
            latLng: [-25.27, 133.77],
            name: "Australia"
          },
          {
            latLng: [-38.41, -63.61],
            name: "Argentina"
          },
          {
            latLng: [61.52, 105.31],
            name: "Russia"
          },
          {
            latLng: [-30.55, 22.93],
            name: "South Africa"
          }
        ],
        focusOn: {
          x: 0,
          y: 0,
          scale: 1
        },
        series: {
          regions: [
            {
              values: {
                US: "rgba(148, 77, 255, 0.3)",
                AU: "rgba(255, 228, 17, 0.3)",
                IN: "rgba(8, 210, 111, 0.3)",
                AR: "rgba(252, 79, 104, 0.3)",
                RU: "rgba(129, 206, 246, 0.3)",
                ZA: "rgba(252, 79, 104, 0.3)"
              }
            }
          ]
        },
        regionStyle: {
          initial: {
            fill: "#e9eff9"
          }
        }
      });
    });

    // Dashboard DateTimePicker
    $(function() {
      var isRtl = $("body").attr("dir") === "rtl" || $("html").attr("dir") === "rtl";

      // Button
      var start = moment().subtract(29, "days");
      var end = moment();

      function cb(start, end) {
        $("#dashboardDate").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
      }

      $("#dashboardDate").daterangepicker(
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment()
                .subtract(1, "month")
                .startOf("month"),
              moment()
                .subtract(1, "month")
                .endOf("month")
            ]
          },
          opens: isRtl ? "left" : "right"
        },
        cb
      );
      cb(start, end);

      // Replace icons
      $("#dashboardDate").each(function() {
        var obj = $(this).data("daterangepicker");
        var _updateCalendars = obj.updateCalendars;
        obj.updateCalendars = function() {
          // Call original function
          _updateCalendars.call(obj);
          // Replace icons
          obj.container.find(".prev > i").each(function() {
            this.className = "ion ion-ios-arrow-back";
          });
          obj.container.find(".next > i").each(function() {
            this.className = "ion ion-ios-arrow-forward";
          });
          obj.container.find(".daterangepicker_input > i").each(function() {
            this.className = "ion ion-md-calendar";
          });
          obj.container.find(".calendar-time > i").each(function() {
            this.className = "ion ion-md-time";
          });
        };
      });
    });
  })(jQuery);
}

export default startLegacyCode();
