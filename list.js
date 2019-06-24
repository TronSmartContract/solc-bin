var tronSoljsonSources = [
  'soljson-0.5.4_Odyssey_v3.6.0',
  'tron_0.4.25_Odyssey_v3.2.3.js',
  'tronbox_soljson_v3.js',
  'tronbox_soljson_v2.js',
  'tronbox_soljson_v1.js'
];
var tronSoljsonReleases = {
  'Tron:0.5.4_Odyssey_v3.6.0': 'soljson-0.5.4_Odyssey_v3.6.0',
  'Tron:0.4.25_Odyssey_v3.2.3': 'tron_0.4.25_Odyssey_v3.2.3.js',
  'Tronbox:SolcjsV3': 'tronbox_soljson_v3.js',
  'Tronbox:SolcjsV2': 'tronbox_soljson_v2.js',
  'Tronbox:SolcjsV1': 'tronbox_soljson_v1.js'
};

if (typeof module !== 'undefined')
  module.exports = {
    'allVersions': tronSoljsonSources,
    'releases': tronSoljsonReleases
  };
