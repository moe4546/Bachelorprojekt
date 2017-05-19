document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

  window.testResults = new ResultCollection([
    new Result({
      label: 'Testüberschrift1',
      description: 'la li lu nur irjri jfwijfjiwjf ri jfwijfjiwjf ljwirfj oiwrjfijrw  ri jfwijfjiwjf ljwirfj oiwrjfijrw  ljwirfj oiwrjfijrw ofwrrwfr w der Mann im Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der Mann im Mond schaut zu.',
      date: '10.08.2016',
      source: 'www.google.de',
      picture: 'https://www.stapler-vergleich.de/img/content/gabelstapler.jpg',
    }),
    new Result({
      label: 'Testüberschrift2',
      description: 'la li lu nur der Mann im Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der Mann im Mond schaut zu.',
      date: '10.08.2016',
      source: 'www.google.de',
    }),
    new Result({
      label: 'Testüberschrift',
      description: 'la li lu nur der Mann im Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der Mann im Mond schaut zu.',
      date: '10.08.2016',
      source: 'www.google.de',
    }),
    new Result({
      label: 'Testüberschrift',
      description: 'la li lu nur der Mann im Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der Mann im Mond schaut zu.',
      date: '10.08.2016',
      source: 'www.google.de',
    }),
    new Result({
      label: 'Testüberschrift',
      description: 'la li lu nur der Mann im Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der  Mond schs aut zu. la li lu nur der Mann im Mond schaut zu.',
      date: '10.08.2016',
      source: 'www.google.de',
    }),
  ]);

  var listView = new ResultListView({ model: testResults});
  //$("#content").html(listView.render().$el);
  listView.render();

  window.router = new AppRouter();
  Backbone.history.start();

}
