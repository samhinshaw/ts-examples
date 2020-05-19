export class StrictStan {
  public getHeightUnsafely(): number {
    const { clientHeight } = document.getElementById('graphContainer');
    return clientHeight;
  }
  public getHeightUnsafelyAlso(): number {
    const graphContainer = document.getElementById('graphContainer');
    return graphContainer.clientHeight;
  }

  public getHeightSafely(): number {
    const graphContainer = document.getElementById('graphContainer');
    if (graphContainer) {
      return graphContainer.clientHeight
    } 
    return 0;
  }

  public getHeightSafelyTersely(): number {
    const graphContainer = document.getElementById('graphContainer');
      return graphContainer?.clientHeight ?? 0;
  } 

  public getGraphContainer(): HTMLElement | null {
    const graphContainer = document.getElementById('graphContainer');
    return graphContainer
  }

  public getHeightWithAbandon(): number | undefined {
    const graphContainer = document.getElementById('graphContainer');
    return graphContainer?.clientHeight;
  }
}