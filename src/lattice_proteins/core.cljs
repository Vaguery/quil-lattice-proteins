(ns lattice-proteins.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup
  []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  (q/background 255)
  {:color 0
   :angle 0})


(defn update-state
  [state]
  {:color (mod (+ (:color state) 0.3) 255)
   :angle (+ (:angle state) 0.01)})


(defn draw-state
  [state]
  (q/fill (:color state) 255 255 1)
  (q/no-stroke)
  (let [angle (+ (:angle state) (rand))
        r (+ 10 (rand 90))
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/ellipse x y r r)
      )))


(q/defsketch lattice-proteins
  :host "lattice-proteins"
  :size [500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
