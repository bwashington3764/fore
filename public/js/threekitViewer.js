window.threekitPlayer({
  authToken: '2b225dcd-8998-4459-b8f7-2e22184becb4', //https://foreproject.herokuapp.com/
  el: document.getElementById("player"),
  stageId: '3ca203de-36dc-4305-90cc-4af740a466d0',
  assetId: 'c4babf6c-aff9-4448-81a0-7fef4b2ac7b9', //desk
  showConfigurator: true,
  showAR: true
}).then(async api => {
  window.player = api;
  window.configurator = await api.getConfigurator();
});

