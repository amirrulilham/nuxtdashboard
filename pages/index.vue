<template>
  <div>
    <v-container class="mt-n6">
      <v-row justify="space-around">
        <template v-for="(item, index) in cards">
          <v-col cols="12" sm="5" lg="3" :key="index">
            <div>
              <v-hover v-slot:default="{ hover }">
                <dashboardCard
                  :color="item.color"
                  :elevation="hover ? 12 : 3"
                  :title="item.title"
                  :subtitle="item.subtitle"
                  :src="item.src"
                  :stat="item.stat"
                >
                  <v-speed-dial
                    v-model="fab[index]"
                    open-on-hover
                    direction="right"
                    absolute
                  >
                    <template v-slot:activator>
                      <v-btn color="cyan" dark small absolute bottom left fab>
                        <v-icon v-if="fab[index]">mdi-close</v-icon>
                        <v-icon v-else>mdi-plus</v-icon>
                      </v-btn>
                    </template>
                    <v-btn fab dark small color="#0288D1" class="ml-12">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="indigo">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="#D32F2F">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-speed-dial>
                </dashboardCard>
              </v-hover>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <v-row class="mt-2">
      <v-col cols="12">
        <mainCard tabtext="sale">
          <v-row class="mt-2">
            <v-col cols="12" lg="6">
              <contentCard title="Sales Trend">
                <v-btn color="cyan" slot="slot-filter" text small>
                  2019
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
                <template slot="slot-content">
                  <LineChart :series="seriesLine" :options="LinechartOptions" />
                  <v-container class="py-0"
                    ><v-divider></v-divider>
                    <v-row>
                      <template v-for="(item, index) in progressLine">
                        <v-col cols="12" lg="6" :key="index">
                          <progressLine
                            :value="item.value"
                            :color="item.color"
                            height="5"
                            :text="item.text"
                          />
                        </v-col>
                      </template>
                    </v-row>
                  </v-container>
                </template>
              </contentCard>
            </v-col>
            <v-col cols="12" lg="6">
              <contentCard title="Product Tracker">
                <v-btn color="cyan" slot="slot-filter" text small>
                  Last 7 days
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
                <donutChart
                  slot="slot-content"
                  :options="DonutchartOptions"
                  :series="seriesDonut"
                />
              </contentCard>
            </v-col>
          </v-row>
        </mainCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dashboardCard from "../components/dashboard-card";
import contentCard from "../components/template/content-card";
import mainCard from "../components/template/main-card";
import LineChart from "../components/apexchart/basic-line";
import DonutChart from "../components/apexchart/basic-donut";
import FilterText from "../components/filter/filter-text";
import Alert from "../components/alert";
import progressLine from "../components/progress_line/progress-line";
export default {
  components: {
    dashboardCard,
    contentCard,
    mainCard,
    LineChart,
    DonutChart,
    FilterText,
    Alert,
    progressLine
  },
  data() {
    return {
      // fab control
      fab: [false],
      // cards
      cards: [
        {
          color: "white",
          title: 120,
          subtitle: "Total Product",
          src: "undraw_successful_purchase_uyin.svg",
          stat: "decrease"
        },
        {
          color: "white",
          title: "$" + 120 + "k",
          subtitle: "Total Profit",
          src: "undraw_personal_finance_tqcd.svg",
          stat: "increase"
        },
        {
          color: "white",
          title: "$" + 10 + "k",
          subtitle: "Total Expenses",
          src: "undraw_wallet_aym5.svg",
          stat: "increase"
        },
        {
          color: "white",
          title: 64,
          subtitle: "New Orders",
          src: "undraw_empty_cart_co35.svg",
          stat: "increase"
        }
      ],
      // filter-text
      filtertext: {
        title: "Year :",
        icon: "mdi-chevron-down",
        value: 2019,
        filteryear: [
          {
            title: 2018
          }
        ]
      },
      // apex chart
      seriesLine: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 23, 43, 33]
        }
      ],
      LinechartOptions: {
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Sale Trends by Month",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        }
      },
      progressLine: [
        {
          value: "30",
          color: "#5E35B1",
          text: "Target Sale : RM10000"
        },
        {
          value: "50",
          color: "warning",
          text: "Customer : 10K"
        },
        {
          value: "60",
          color: "error",
          text: "Retention : 75%"
        },
        {
          value: "15",
          color: "success",
          text: "Duration : 1 Year"
        }
      ],
      // ------- Donut
      seriesDonut: [44, 55, 41, 17, 15],
      DonutchartOptions: {
        chart: {
          type: "donut"
        },
        labels: [
          "Product 1",
          "Product 2",
          "Product 3",
          "Product 4",
          "Product 5"
        ],
        dataLabels: {
          enabled: true
        },
        legend: {
          position: "bottom"
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          pie: {
            customScale: 1,
            offsetX: 0,
            offsetY: 0,
            expandOnClick: true,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: "65%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "22px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10
                },
                value: {
                  show: true,
                  fontSize: "20px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                  formatter: function(val) {
                    return val;
                  }
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: "Total",
                  fontSize: "22px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: "#373d3f",
                  formatter: function(w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                  }
                }
              }
            }
          }
        }
      }
    };
  },
  created(){
    this.$OneSignal.push(() => {
    this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
    if (isEnabled) {
      console.log('Push notifications are enabled!')
    } else {
      console.log('Push notifications are not enabled yet.')
    }
  })
})
  }
};
</script>

<style></style>
