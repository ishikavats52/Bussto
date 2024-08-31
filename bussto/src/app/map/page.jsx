"use client";
import React, { useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import Dummydata from '../../../DummyData';  

const MyMap = () => {
  useEffect(() => {
    
    const map = L.map('map').setView([28.6139, 77.2090], 12);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

   
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(28.6139, 77.2090), 
        L.latLng(28.723, 77.124)    
      ],
      routeWhileDragging: true
    }).addTo(map);

    
    Dummydata.features.forEach((feature) => {
      L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
        .bindPopup(feature.properties.station_name)
        .addTo(map);
    });

    
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" className='h-[90vh] w-3/4'></div>
  );
};

export default MyMap;
