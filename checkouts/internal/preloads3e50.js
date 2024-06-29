
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.a5c07bc36189c38baa59.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/792.baseline.en.16b42a9ac200a33e90fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/868.baseline.en.857d99f6a70287292e3d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/40.baseline.en.16d5c68737b7118d2f48.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.47c6d838ee2cee303dbd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/240.baseline.en.9b24600641cb32831349.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.baseline.en.b85972cbe947bde718b9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/472.baseline.en.78481792f5bbdd87330c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/504.baseline.en.fd4a69f35bc0c2e83ec7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.ffe154291d1d463faa75.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/792.baseline.en.827ff688d1f568a2557a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.bd7e1a04a0d2456be516.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.baseline.en.2b60ccea73a26508dcab.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/457.baseline.en.b4da76935d3d3f2fa3de.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  