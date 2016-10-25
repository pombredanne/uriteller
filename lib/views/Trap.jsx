import React from "react";

export default function Index() {
    return (
        <div className="container text-xs-center">
            <section className="row">
                <div className="col-xs-12">
                    <h1>Howdy, stranger</h1>

                    <p className="lead">
                        This is a <strong>URI:teller</strong> trap page.
                    </p>
                </div>
            </section>

            <section className="row">
                <div className="col-xs-12">
                    <p className="lead">
                        Want to find out more?
                    </p>
                    <p>
                        <a href="/" className="btn btn-primary btn-lg">Visit URI:teller now</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
