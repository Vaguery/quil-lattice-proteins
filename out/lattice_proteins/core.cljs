(ns lattice-proteins.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  (q/background 255)
  {:color 0
   :angle 0})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.3) 255)
   :angle (+ (:angle state) 0.01)})

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  ; Set circle color.
  (q/fill (:color state) 255 255 1)
  (q/no-stroke)
  ; Calculate x and y coordinates of the circle.
  (let [angle (+ (:angle state) (rand))
        r (+ 10 (rand 90))
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
    ; Move origin point to the center of the sketch.
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/ellipse x y r r)
      ;(q/display-filter :blur 1)
      )))

(q/defsketch lattice-proteins
  :host "lattice-proteins"
  :size [300 300]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
