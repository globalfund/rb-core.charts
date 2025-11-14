export function render(node, data) {
  node.innerHTML = `
    <div style="width: 317px; color: #000;">
      <div style="font-size: 21.985px;text-transform: uppercase;border-bottom: 1px solid #000;padding-bottom: 10px; font-weight:350;">
        ${data.header ?? ""}
      </div>
      <div style="font-size: 105.527px;font-weight: 600;height: 112px;margin: 26px 0; display: flex; align-items: center;">
        ${data.metric ?? 0.0}
      </div>
      <div style="font-size: 21.985px;text-transform: uppercase;border-bottom: 1px solid #000;padding-bottom: 10px; font-weight:350;">
        ${data.subheader ?? ""}
      </div>
      <div style="font-size: 17.588px;margin-top: 14px; font-weight:350;">
        ${data.unitofmeasurement ?? ""}
      </div>
    </div>
  `;
}
