import React from 'react';

const Sitemap = () => {
  React.useEffect(() => {
    fetch('/sitemap.xml')
      .then(response => response.text())
      .then(data => {
        const blob = new Blob([data], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        window.location.href = url;
      });
  }, []);

  return null;
};

export default Sitemap;
