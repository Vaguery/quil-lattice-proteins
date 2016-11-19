(ns lattice-proteins.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup
  []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 230)

  {:cursor [0 0]
   :direction :east
   :color 0
   :angle 0})


(defn update-state
  [state]
  { :cursor [(rand-int 10) (rand-int 10)]
    :direction :east
    :color (mod (+ (:color state) 0.3) 255)
    :angle (+ (:angle state) 0.01)})


(defn draw-state
  [state]
  (q/no-stroke)
  (let [[i j]     (:cursor state)
        cell-size 20]

    (q/fill (rand-int 255) 200 200)
    (q/with-translation [(+ (* cell-size i) (/ (q/width) 2))
                         (+ (* cell-size j) (/ (q/width) 2))] 
      (q/ellipse 0 0 10 10))
      ))


(q/defsketch lattice-proteins
  :host "lattice-proteins"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
