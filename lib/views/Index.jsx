import React from "react";

export default function Index() {
  return (
    <div>
      <div className="heading">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-6 offset-lg-1 logo" />

          <div className="col-12 col-md-5 col-lg-4 col-xl-3 blurb">
            <p className="lead">
              Are <strong>they</strong> calling back <strong>from beyond the cloud</strong>?
            </p>

            <a className="btn btn-primary btn-lg" href="/new" title="Create new URI:teller monitor and trap">Let's find out!</a>
          </div>
        </div>
      </div>

      <div className="comics">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 comic comic-1" title="Create a pair of URLs: a trap and a monitor" />
          <div className="col-sm-6 col-md-6 col-lg-4 comic comic-2" title="Copy-paste the trap to your favorite chat app, URL shortener, ..." />
          <div className="col-sm-12 col-md-12 col-lg-4 comic comic-3" title="The monitor page shows you who visited the trap" />
        </div>
      </div>
    </div>
  );
}
