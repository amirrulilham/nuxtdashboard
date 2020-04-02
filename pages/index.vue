<template>
  <div>
    <v-container>
      <div>
        <v-alert
          v-model="alert"
          dismissible
          color="cyan"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-alert-circle"
        >
          You've got <strong>5</strong> new updates on your timeline!.
        </v-alert>
      </div>
      <v-row justify="space-around">
        <template v-for="(item, index) in cards">
          <v-col cols="12" sm="5" lg="3" :key="index">
            <div>
              <v-hover v-slot:default="{ hover }">
                <v-card :color="item.color" :elevation="hover ? 12 : 3" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline black--text font-weight-bold"
                        v-text="item.title"
                      />

                      <v-card-subtitle
                        class="grey--text text--darken-1 py-0"
                        v-text="item.subtitle"
                      />
                      <v-card-actions class="d-flex justify-center">
                        <v-chip
                          v-if="item.stat == 'increase'"
                          color="success"
                          small
                        >
                          (30 days)
                          <v-icon small right>mdi-trending-up</v-icon>
                        </v-chip>
                        <v-chip
                          v-if="item.stat == 'decrease'"
                          color="warning"
                          small
                        >
                          (30 days)
                          <v-icon small right>mdi-trending-down</v-icon>
                        </v-chip>
                      </v-card-actions>
                    </div>
                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
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
                </v-card>
              </v-hover>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <v-row class="mt-2">
      <v-col cols="12">
        <v-card flat>
          <v-container>
            <v-sheet elevation="5">
              <v-tabs background-color="cyan" dark>
                <v-tabs-slider color="yellow accent-3"></v-tabs-slider>
                <v-tab class="ml-2">Sale</v-tab>
              </v-tabs>
            </v-sheet>
            <v-row class="mt-2">
              <v-col cols="12" lg="6">
                <v-card class="card-border fill-height">
                  <v-card-title>
                    <span>Sales Trend</span>
                    <v-spacer></v-spacer>
                    <v-btn color="cyan" text small>
                      2019
                      <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-card-text class="px-1 pt-1">
                    <div>
                      <LineChart
                        :series="seriesLine"
                        :options="LinechartOptions"
                      />
                    </div>
                    <v-container class="py-0"
                      ><v-divider></v-divider>
                      <v-row>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div><span class="subtitle-1 font-weight-medium">Target Sale : RM10000</span></div>
                            <div class="mt-1">
                              <v-progress-linear
                                value="30"
                                color="#5E35B1"
                                height="5"
                              ></v-progress-linear>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div><span class="subtitle-1 font-weight-medium">Customer : 10K</span></div>
                            <div class="mt-1">
                              <v-progress-linear
                                value="30"
                                color="warning"
                                height="5"
                              ></v-progress-linear>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div><span class="subtitle-1 font-weight-medium">Retention : 75%</span></div>
                            <div class="mt-1">
                              <v-progress-linear
                                value="30"
                                color="error"
                                height="5"
                              ></v-progress-linear>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="6">
                          <div class="d-flex flex-column">
                            <div><span class="subtitle-1 font-weight-medium">Duration : 1 Year</span></div>
                            <div class="mt-1">
                              <v-progress-linear
                                value="30"
                                color="success"
                                height="5"
                              ></v-progress-linear>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="6">
                <v-card class="card-border fill-height">
                  <v-card-title>
                    <span>Product Tracker</span>
                    <v-spacer></v-spacer>
                    <v-btn color="cyan" text small>
                      Last 7 days
                      <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-card-text class="px-1 pt-1">
                    <div>
                      <apexchart
                        height="350"
                        type="donut"
                        :options="chartOptions"
                        :series="series"
                      ></apexchart>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LineChart from "../components/apexchart/basic-line";
import FilterText from "../components/filter/filter-text";
export default {
  components: {
    LineChart,
    FilterText
  },
  data() {
    return {
      // alert !
      alert: true,
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
      // ------- Donut
      series: [44, 55, 41, 17, 15],
      chartOptions: {
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
  }
};
</script>

<style scoped>
.card-border {
  border-radius: 15px !important;
}
</style>
