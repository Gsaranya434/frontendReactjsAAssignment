import {useState} from 'react';
import React from 'react';
import modal from './navbarPage.js';


function HomePage(){
    return (
     <div className="col">
          <div>
            <div className="card">
              <div className="card">
                <table>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>Approved Files</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>Rejecting Files</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Pending Files</td>
                      <td>32</td>
                    </tr>
                    <tr>
                      <td>Total Uploaded Files</td>
                      <td>67</td>
                    </tr>
                  </tbody>
                </table>                
              </div>
            </div>
          </div>
        </div> 
    );
}

export default HomePage;