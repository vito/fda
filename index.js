var messages = [{"timestamp":"1415769937.451723099","source":"atc","message":"atc.scheduler.tick.start","log_level":1,"data":{"session":"5.42"}},{"timestamp":"1415769937.457671404","source":"atc","message":"atc.scheduler.tick.scheduling","log_level":1,"data":{"job":"dummy","session":"5.42"}},{"timestamp":"1415769937.467985868","source":"atc","message":"atc.scheduler.tick.done","log_level":1,"data":{"session":"5.42"}},{"timestamp":"1415769947.469661713","source":"atc","message":"atc.scheduler.tick.start","log_level":1,"data":{"session":"5.43"}},{"timestamp":"1415769947.485474348","source":"atc","message":"atc.scheduler.tick.scheduling","log_level":1,"data":{"job":"dummy","session":"5.43"}},{"timestamp":"1415769947.500877857","source":"atc","message":"atc.scheduler.tick.done","log_level":1,"data":{"session":"5.43"}},{"timestamp":"1415769948.886157036","source":"atc","message":"atc.exited-with-failure","log_level":2,"data":{"error":"Exit trace for group:\n"}},{"timestamp":"1415769962.224680185","source":"atc","message":"atc.failed-to-open-db","log_level":2,"data":{"error":"Could not get DB version: dial tcp: lookup postgresql.service.dc1.consul: no such host"}},{"timestamp":"1415769967.238642693","source":"atc","message":"atc.radar.start","log_level":1,"data":{"session":"4"}},{"timestamp":"1415769967.239086390","source":"atc","message":"atc.scheduler.start","log_level":1,"data":{"inverval":"10s","session":"5"}},{"timestamp":"1415769967.239585161","source":"atc","message":"atc.listening","log_level":1,"data":{"debug":"127.0.0.1:8079","web":"0.0.0.0:8080"}},{"timestamp":"1415769977.240306377","source":"atc","message":"atc.scheduler.tick.start","log_level":1,"data":{"session":"5.1"}},{"timestamp":"1415769977.247878075","source":"atc","message":"atc.scheduler.tick.scheduling","log_level":1,"data":{"job":"dummy","session":"5.1"}},{"timestamp":"1415769977.268682718","source":"atc","message":"atc.scheduler.tick.done","log_level":1,"data":{"session":"5.1"}},{"timestamp":"1415769985.678228378","source":"atc","message":"atc.trigger-build.triggering","log_level":0,"data":{"job":"dummy","session":"6"}},{"timestamp":"1415769986.241179466","source":"atc","message":"atc.trigger-build.triggering","log_level":0,"data":{"job":"dummy","session":"9"}},{"timestamp":"1415769986.739787102","source":"atc","message":"atc.trigger-build.triggering","log_level":0,"data":{"job":"dummy","session":"12"}},{"timestamp":"1415769987.269931316","source":"atc","message":"atc.scheduler.tick.start","log_level":1,"data":{"session":"5.2"}},{"timestamp":"1415769987.289605856","source":"atc","message":"atc.scheduler.tick.scheduling","log_level":1,"data":{"job":"dummy","session":"5.2"}},{"timestamp":"1415769987.291641235","source":"atc","message":"atc.tracker.tracking.start","log_level":1,"data":{"build":3,"session":"2.1"}},{"timestamp":"1415769987.309090137","source":"atc","message":"atc.tracker.tracking.start","log_level":1,"data":{"build":5,"session":"2.2"}},{"timestamp":"1415769987.318798780","source":"atc","message":"atc.tracker.tracking.start","log_level":1,"data":{"build":4,"session":"2.3"}},{"timestamp":"1415769987.328591347","source":"atc","message":"atc.tracker.tracking.event-stream-version","log_level":1,"data":{"build":5,"session":"2.2","version":"1.1"}},{"timestamp":"1415769987.344346762","source":"atc","message":"atc.tracker.tracking.event-stream-version","log_level":1,"data":{"build":3,"session":"2.1","version":"1.1"}},{"timestamp":"1415769987.365539074","source":"atc","message":"atc.scheduler.tick.done","log_level":1,"data":{"session":"5.2"}},{"timestamp":"1415769987.367218971","source":"atc","message":"atc.tracker.tracking.event-stream-version","log_level":1,"data":{"build":4,"session":"2.3","version":"1.1"}},{"timestamp":"1415769988.140716076","source":"atc","message":"atc.tracker.tracking.processing-build-status","log_level":1,"data":{"build":3,"event":"{\"status\":\"started\",\"time\":1415769988}","session":"2.1"}},{"timestamp":"1415769988.163803101","source":"atc","message":"atc.tracker.tracking.processing-build-status","log_level":1,"data":{"build":3,"event":"{\"status\":\"succeeded\",\"time\":1415769988}","session":"2.1"}},{"timestamp":"1415769988.179805994","source":"atc","message":"atc.tracker.tracking.event-stream-ended","log_level":1,"data":{"build":3,"session":"2.1"}},{"timestamp":"1415769988.181314468","source":"atc","message":"atc.tracker.tracking.event-stream-completed","log_level":1,"data":{"build":3,"session":"2.1"}},{"timestamp":"1415769988.182662249","source":"atc","message":"atc.tracker.tracking.done","log_level":1,"data":{"build":3,"session":"2.1"}},{"timestamp":"1415769988.643287182","source":"atc","message":"atc.tracker.tracking.processing-build-status","log_level":1,"data":{"build":4,"event":"{\"status\":\"started\",\"time\":1415769988}","session":"2.3"}},{"timestamp":"1415769988.669975519","source":"atc","message":"atc.tracker.tracking.processing-build-status","log_level":1,"data":{"build":4,"event":"{\"status\":\"succeeded\",\"time\":1415769988}","session":"2.3"}},{"timestamp":"1415769988.688825846","source":"atc","message":"atc.tracker.tracking.event-stream-ended","log_level":1,"data":{"build":4,"session":"2.3"}},{"timestamp":"1415769988.690803766","source":"atc","message":"atc.tracker.tracking.event-stream-completed","log_level":1,"data":{"build":4,"session":"2.3"}},{"timestamp":"1415769988.690894604","source":"atc","message":"atc.tracker.tracking.done","log_level":1,"data":{"build":4,"session":"2.3"}},{"timestamp":"1415769989.096284628","source":"atc","message":"atc.tracker.tracking.processing-build-status","log_level":1,"data":{"build":5,"event":"{\"status\":\"started\",\"time\":1415769989}","session":"2.2"}},{"timestamp":"1415769989.131110430","source":"atc","message":"atc.tracker.tracking.processing-build-status","log_level":1,"data":{"build":5,"event":"{\"status\":\"succeeded\",\"time\":1415769989}","session":"2.2"}},{"timestamp":"1415769989.147940397","source":"atc","message":"atc.tracker.tracking.event-stream-ended","log_level":1,"data":{"build":5,"session":"2.2"}},{"timestamp":"1415769989.150692940","source":"atc","message":"atc.tracker.tracking.event-stream-completed","log_level":1,"data":{"build":5,"session":"2.2"}},{"timestamp":"1415769989.151269913","source":"atc","message":"atc.tracker.tracking.done","log_level":1,"data":{"build":5,"session":"2.2"}},{"timestamp":"1415769997.398983002","source":"atc","message":"atc.scheduler.tick.start","log_level":1,"data":{"session":"5.3"}},{"timestamp":"1415769997.405298710","source":"atc","message":"atc.scheduler.tick.scheduling","log_level":1,"data":{"job":"dummy","session":"5.3"}},{"timestamp":"1415769997.414528370","source":"atc","message":"atc.scheduler.tick.done","log_level":1,"data":{"session":"5.3"}}]



var currentSessions = {};

function getCurrentPane(sessionID) {
  return currentSessions[sessionID];
}

function removeSessionPane(sessionID) {
  var pane = currentSessions[sessionID];
  if (pane) {
    pane.remove();
    delete currentSessions[sessionID];
  }
}

function createSessionPane(sessionID) {
  var ids = sessionID.split(".");

  var pane = $("<div>").addClass("session");
  $("#current").append(pane);

  currentSessions[sessionID] = pane;

  return pane;
}

function addLogEntry(container, message) {
  var entry = $("<div>");
  entry.addClass("message");

  var when = new Date(JSON.parse(message.timestamp) * 1000);
  $("<span>").addClass("session").text(message.data.session);
  $("<span>").addClass("time").text(when).appendTo(entry);
  $("<span>").addClass("message").text(message.message).appendTo(entry);
  $("<pre>").addClass("data").text(JSON.stringify(message.data));

  entry.appendTo(container);
}

function processMessage(msg) {
  if (msg.message.match(/start(ing)?$/)) {
    createSessionPane(msg.data.session);
  }

  var currentPane = getCurrentPane(msg.data.session);
  if (currentPane) {
    addLogEntry(currentPane, msg);
  }

  if (msg.message.match(/(done|finished)$/)) {
    removeSessionPane(msg.data.session);
  }

  addLogEntry($("#log"), msg);
}

$(document).ready(function() {
  for (var i in messages) {
    setTimeout(function(msg) {
      return function() {
        processMessage(msg);
      }
    }(messages[i]), 50 * (i + 1))
  }
});
