/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],
	zoom: 0.7,
	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			timezone: "Asia/Seoul"
		},
		{
			module: "calendar",
			header: "South Korea Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "https://www.calendarlabs.com/ical-calendar/ics/69/South_Korea_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "top_right",
			config: {
				compliments: {
					anytime: [
						"안녕하세요?~"
					],
					morning: [
						"좋은 아침이에요!",
					],
					afternoon: [
						"식사는 하셨어요?",
					],
					evening: [
						"굿 나잇~"
					]
				}
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "",
				locationID: "1835848",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "860806a4ce4c3401b70f97d34f99d7ea"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "",
				locationID: "1835848",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "860806a4ce4c3401b70f97d34f99d7ea"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "jtbc",
						url: "http://fs.jtbc.joins.com/RSS/newsflash.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				updateInterval: 5000
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
